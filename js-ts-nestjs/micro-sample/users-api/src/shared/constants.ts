export enum RabbitMQQueues {
  UsersQueue = 'queue.users',
}

export enum UserMessages {
  CREATE = 'create_user',
  FIND_ALL = 'find_users',
  FIND_ONE = 'find_user',
  UPDATE = 'update_user',
  DELETE = 'delete_user',
  VALID_USER = 'valid_user',
}
