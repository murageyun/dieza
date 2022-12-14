import EmberRouter from '@ember/routing/router';
import config from 'dieza/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('artist', { path: '/artist/:id' });
});
