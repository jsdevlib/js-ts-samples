export enum RabbitMQQueues {
  UsersQueue = 'queue.users',
  OrganizationsQueue = 'queue.organizations',
}

export enum UserMessages {
  CREATE = 'create_user',
  FIND_ALL = 'find_users',
  FIND_ONE = 'find_user',
  UPDATE = 'update_user',
  DELETE = 'delete_user',
  VALID_USER = 'valid_user',
}

export enum OrganizationMessages {
  CREATE = 'create_organization',
  FIND_ALL = 'find_organizations',
  FIND_ONE = 'find_organization',
  UPDATE = 'update_organization',
  DELETE = 'delete_organization',
  VALID_ORGANIZATION = 'valid_organization',
  ADD_TRIBE = 'add_tribe',
}
