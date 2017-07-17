"use strict";



define('ga-wdi-boston.ember-resources/adapters/application', ['exports', 'ga-wdi-boston.ember-resources/config/environment', 'active-model-adapter'], function (exports, _gaWdiBostonEmberResourcesConfigEnvironment, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _gaWdiBostonEmberResourcesConfigEnvironment['default'].apiHost
  });
});
define('ga-wdi-boston.ember-resources/adapters/item', ['exports', 'ga-wdi-boston.ember-resources/adapters/application'], function (exports, _gaWdiBostonEmberResourcesAdaptersApplication) {
  exports['default'] = _gaWdiBostonEmberResourcesAdaptersApplication['default'].extend({
    createRecord: function createRecord(store, type, record) {
      var api = this.get('host');
      var serialized = this.serialize(record, { includeId: true });
      var parentId = serialized.list_id;
      var url = api + '/lists/' + parentId + '/items';
      var data = { item: serialized };
      return this.ajax(url, 'POST', { data: data });
    }
  });
});
define('ga-wdi-boston.ember-resources/app', ['exports', 'ember', 'ga-wdi-boston.ember-resources/resolver', 'ember-load-initializers', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _ember, _gaWdiBostonEmberResourcesResolver, _emberLoadInitializers, _gaWdiBostonEmberResourcesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _gaWdiBostonEmberResourcesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gaWdiBostonEmberResourcesConfigEnvironment['default'].podModulePrefix,
    Resolver: _gaWdiBostonEmberResourcesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _gaWdiBostonEmberResourcesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ga-wdi-boston.ember-resources/components/shopping-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['listr'],
    classNameBindings: ['listDetailHidden'],
    listDetailHidden: false,
    newItem: {
      content: null,
      done: false
    },
    actions: {
      toggleListDetail: function toggleListDetail() {
        return this.toggleProperty('listDetailHidden');
      },
      toggleItemDone: function toggleItemDone(item) {
        return this.sendAction('toggleItemDone', item);
      },
      deleteItem: function deleteItem(item) {
        return this.sendAction('deleteItem', item);
      },
      createItem: function createItem() {
        console.log('yes');
        var item = this.get('newItem');
        item.list = this.get('list');
        console.log(item.list);
        return this.sendAction('createItem', item);
      }
    }
  });
});
define('ga-wdi-boston.ember-resources/components/shopping-list/card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ga-wdi-boston.ember-resources/components/shopping-list/item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNameBindings: ['listItemCompleted'],
    listItemCompleted: _ember['default'].computed.alias('item.done'),
    actions: {
      toggleDone: function toggleDone() {
        return this.sendAction('toggleItemDone', this.get('item'));
      },
      deleteItem: function deleteItem() {
        return this.sendAction('deleteItem', this.get('item'));
      }
    }
  });
});
define('ga-wdi-boston.ember-resources/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ga-wdi-boston.ember-resources/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ga-wdi-boston.ember-resources/helpers/app-version', ['exports', 'ember', 'ga-wdi-boston.ember-resources/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _gaWdiBostonEmberResourcesConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _gaWdiBostonEmberResourcesConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ga-wdi-boston.ember-resources/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ga-wdi-boston.ember-resources/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("ga-wdi-boston.ember-resources/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('ga-wdi-boston.ember-resources/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _gaWdiBostonEmberResourcesConfigEnvironment) {
  var _config$APP = _gaWdiBostonEmberResourcesConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ga-wdi-boston.ember-resources/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ga-wdi-boston.ember-resources/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.ember-resources/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ga-wdi-boston.ember-resources/initializers/export-application-global', ['exports', 'ember', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _ember, _gaWdiBostonEmberResourcesConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_gaWdiBostonEmberResourcesConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _gaWdiBostonEmberResourcesConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_gaWdiBostonEmberResourcesConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ga-wdi-boston.ember-resources/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.ember-resources/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.ember-resources/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ga-wdi-boston.ember-resources/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('ga-wdi-boston.ember-resources/models/item', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    content: _emberData['default'].attr('string'),
    done: _emberData['default'].attr('boolean'),
    list: _emberData['default'].belongsTo('list')
  });
});
define('ga-wdi-boston.ember-resources/models/list', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    // Setting up how we want the model to be on the front end
    // So ember knows how to store a list object with attributes
    title: _emberData['default'].attr('string'),
    hidden: _emberData['default'].attr('boolean'),
    // unintuitive that it is item not items but that's the model
    // that ember will use to build the objects
    items: _emberData['default'].hasMany('item')
  });
});
define('ga-wdi-boston.ember-resources/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ga-wdi-boston.ember-resources/router', ['exports', 'ember', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _ember, _gaWdiBostonEmberResourcesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _gaWdiBostonEmberResourcesConfigEnvironment['default'].locationType,
    rootURL: _gaWdiBostonEmberResourcesConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('lists');
    this.route('list', { path: '/lists/:list_id' });
    // this.route('list');
  });

  exports['default'] = Router;
});
define('ga-wdi-boston.ember-resources/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return [{
        title: 'Favorites',
        items: [{ content: 'Cats' }, { content: 'Dogs' }, { content: 'Scotch' }]
      }, {
        title: 'Todos',
        items: [{ content: 'Learn Ember' }, { content: 'Change Oil' }, { content: 'Visit Portland' }]
      }];
    }
  });
});
define('ga-wdi-boston.ember-resources/routes/list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      // params object and list_id from that param
      return this.get('store').findRecord('list', params.list_id);
    },
    actions: {
      toggleItemDone: function toggleItemDone(item) {
        item.toggleProperty('done');
        item.save();
      },
      deleteItem: function deleteItem(item) {
        item.destroyRecord();
      },
      createItem: function createItem(item) {
        console.log('sup');
        var itemRecord = this.get('store').createRecord('item', item);
        itemRecord.save();
      }
    }
  });
});
define('ga-wdi-boston.ember-resources/routes/lists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // ember knows to make a get request to /lists
      // thanks to it assuming API RESTful convention
      return this.get('store').findAll('list');
    }
    // model: function () { return [] }
    // model () {
    //   return [
    //     {
    //       title: 'Favorites',
    //       items: [
    //         { content: 'Cats' },
    //         { content: 'Dogs' },
    //         { content: 'Scotch' },
    //       ],
    //     }, {
    //       title: 'Todos',
    //       items: [
    //         { content: 'Learn Ember' },
    //         { content: 'Change Oil' },
    //         { content: 'Visit Portland' },
    //       ],
    //     },
    //   ];
    // },
  });
});
define('ga-wdi-boston.ember-resources/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('ga-wdi-boston.ember-resources/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("ga-wdi-boston.ember-resources/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JUnGXv8P", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Ember Resources\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/application.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/components/shopping-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DXrjJVRP", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"list-header\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleListDetail\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"list\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"Hidden is: \"],[\"append\",[\"unknown\",[\"list\",\"hidden\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createItem\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"New Item\",[\"get\",[\"newItem\",\"content\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"list\",\"items\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"shopping-list/item\"],null,[[\"item\",\"toggleItemDone\",\"deleteItem\",\"createItem\"],[[\"get\",[\"item\"]],\"toggleItemDone\",\"deleteItem\",\"createItem\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/components/shopping-list.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/components/shopping-list/card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OireE2lR", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"list\",[\"get\",[\"list\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"list\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/components/shopping-list/card.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/components/shopping-list/item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7QJ2l1CW", "block": "{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"list-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleDone\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"content\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteItem\"]],[\"flush-element\"],[\"text\",\" Delete \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/components/shopping-list/item.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cjd03jU8", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Welcome to shopper\"],[\"close-element\"],[\"text\",\"\\n\\nWanne shop? \"],[\"block\",[\"link-to\"],[\"lists\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Click Here \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/index.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FeUkEt90", "block": "{\"statements\":[[\"append\",[\"helper\",[\"shopping-list\"],null,[[\"list\",\"toggleItemDone\",\"deleteItem\",\"createItem\"],[[\"get\",[\"model\"]],\"toggleItemDone\",\"deleteItem\",\"createItem\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/list.hbs" } });
});
define("ga-wdi-boston.ember-resources/templates/lists", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4YVB2Num", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"ListR\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\"\\nWanne shop? \"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home \"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"shopping-list/card\"],null,[[\"list\"],[[\"get\",[\"list\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"list\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.ember-resources/templates/lists.hbs" } });
});


define('ga-wdi-boston.ember-resources/config/environment', ['ember'], function(Ember) {
  var prefix = 'ga-wdi-boston.ember-resources';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ga-wdi-boston.ember-resources/app")["default"].create({"name":"ga-wdi-boston.ember-resources","version":"0.0.1+0def9fed"});
}
//# sourceMappingURL=ga-wdi-boston.ember-resources.map
