export enum RouteName {
  LOGIN = 'login',
  APPLICATION = 'application',
  HOME = 'home',
  RESTAURANT = 'restaurant',
  NOT_FOUND = 'not-found',
}

export enum RoutePath {
  LOGIN = '/login',
  APPLICATION = '/',
  HOME = '',
  RESTAURANT = 'restaurant/:id',
  NOT_FOUND = '/:pathMatch(.*)*',
}
