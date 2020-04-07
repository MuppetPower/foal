import {
  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,
  HttpResponseNotFound, HttpResponseOK, Post,
  TokenRequired, ValidateBody, ValidatePathParam
} from '@foal/core';
import { fetchUser, TypeORMStore } from '@foal/typeorm';
import { getRepository } from 'typeorm';

import { Todo, User } from '../entities';

@TokenRequired({
  cookie: true,
  store: TypeORMStore,
  // Make ctx.user be an instance of User.
  user: fetchUser(User),
})
export class ApiController {

  @Get('/todos')
  async getTodos(ctx: Context) {
    const todos = await getRepository(Todo).find({ owner: ctx.user });
    return new HttpResponseOK(todos);
  }

  @Post('/todos')
  @ValidateBody({
    // The body request should be an object once parsed by the framework.
    // Every additional properties that are not defined in the "properties"
    // object should be removed.
    additionalProperties: false,
    properties: {
      // The "text" property of ctx.request.body should be a string if it exists.
      text: { type: 'string' }
    },
    // The property "text" is required.
    required: [ 'text' ],
    type: 'object',
  })
  async postTodo(ctx: Context) {
    // Create a new todo with the body of the HTTP request.
    const todo = new Todo();
    todo.text = ctx.request.body.text;
    // Make the current user the owner of the todo.
    todo.owner = ctx.user;

    // Save the todo in the database.
    await getRepository(Todo).save(todo);

    // Return the new todo with the id generated by the database. The status is 201.
    return new HttpResponseCreated(todo);
  }

  @Delete('/todos/:id')
  // The id should be a number. If it is not, the hook returns a "400 - Bad Request" error.
  @ValidatePathParam('id', { type: 'number' })
  async deleteTodo(ctx: Context) {
    // Get the todo with the id given in the URL if it exists.
    const todo = await getRepository(Todo).findOne({
      id: +ctx.request.params.id,
      // Do not return the todo if it does not belong to the current user.
      owner: ctx.user
    });

    // Return a 404 Not Found response if no such todo exists.
    if (!todo) {
      return new HttpResponseNotFound();
    }

    // Remove the todo from the database.
    await getRepository(Todo).remove(todo);

    // Returns an successful empty response. The status is 204.
    return new HttpResponseNoContent();
  }

}