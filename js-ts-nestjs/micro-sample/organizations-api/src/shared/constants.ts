export enum RabbitMQQueues {
  OrganizationQueue = 'queue.organizations',
}

export enum OrganizationMessages {
  CREATE = 'create_organization',
  FIND_ALL = 'find_organizations',
  FIND_ONE = 'find_organization',
  UPDATE = 'update_organization',
  DELETE = 'delete_organization',
}
