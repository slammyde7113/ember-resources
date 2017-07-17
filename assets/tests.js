'use strict';

define('ga-wdi-boston.ember-resources/tests/adapters/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/adapters/item.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | adapters/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/item.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/components/shopping-list.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/shopping-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/shopping-list.js should pass jshint.\ncomponents/shopping-list.js: line 19, col 49, Missing semicolon.\ncomponents/shopping-list.js: line 22, col 25, Missing semicolon.\ncomponents/shopping-list.js: line 25, col 29, Missing semicolon.\n\n3 errors');
  });
});
define('ga-wdi-boston.ember-resources/tests/components/shopping-list/card.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/shopping-list/card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/shopping-list/card.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/components/shopping-list/item.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/shopping-list/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/shopping-list/item.js should pass jshint.\ncomponents/shopping-list/item.js: line 12, col 61, Missing semicolon.\n\n1 error');
  });
});
define('ga-wdi-boston.ember-resources/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ga-wdi-boston.ember-resources/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ga-wdi-boston.ember-resources/tests/helpers/start-app', 'ga-wdi-boston.ember-resources/tests/helpers/destroy-app'], function (exports, _qunit, _gaWdiBostonEmberResourcesTestsHelpersStartApp, _gaWdiBostonEmberResourcesTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _gaWdiBostonEmberResourcesTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _gaWdiBostonEmberResourcesTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ga-wdi-boston.ember-resources/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/helpers/resolver', ['exports', 'ga-wdi-boston.ember-resources/resolver', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _gaWdiBostonEmberResourcesResolver, _gaWdiBostonEmberResourcesConfigEnvironment) {

  var resolver = _gaWdiBostonEmberResourcesResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _gaWdiBostonEmberResourcesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gaWdiBostonEmberResourcesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ga-wdi-boston.ember-resources/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/helpers/start-app', ['exports', 'ember', 'ga-wdi-boston.ember-resources/app', 'ga-wdi-boston.ember-resources/config/environment'], function (exports, _ember, _gaWdiBostonEmberResourcesApp, _gaWdiBostonEmberResourcesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _gaWdiBostonEmberResourcesConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _gaWdiBostonEmberResourcesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ga-wdi-boston.ember-resources/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('shopping-list/card', 'Integration | Component | shopping list/card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '4JlF8zZf',
      'block': '{"statements":[["append",["unknown",["shopping-list/card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'oYS1iIxK',
      'block': '{"statements":[["text","\\n"],["block",["shopping-list/card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/card-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/shopping-list/card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/shopping-list/card-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('shopping-list', 'Integration | Component | listr list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'EMHbcukq',
      'block': '{"statements":[["append",["unknown",["shopping-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'aFHd9MQg',
      'block': '{"statements":[["text","\\n"],["block",["shopping-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/component-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/shopping-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/shopping-list/component-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/item/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('shopping-list/item', 'Integration | Component | listr list/item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'SGR409P7',
      'block': '{"statements":[["append",["unknown",["shopping-list/item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'uMzvqlTw',
      'block': '{"statements":[["text","\\n"],["block",["shopping-list/item"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ga-wdi-boston.ember-resources/tests/integration/components/shopping-list/item/component-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/shopping-list/item/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/shopping-list/item/component-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/models/item.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | models/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/item.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/models/list.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | models/list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/list.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/routes/index.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/routes/list.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/list.js should pass jshint.\nroutes/list.js: line 17, col 25, Missing semicolon.\nroutes/list.js: line 18, col 68, Missing semicolon.\nroutes/list.js: line 19, col 24, Missing semicolon.\n\n3 errors');
  });
});
define('ga-wdi-boston.ember-resources/tests/routes/lists.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/lists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lists.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/serializers/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/test-helper', ['exports', 'ga-wdi-boston.ember-resources/tests/helpers/resolver', 'ember-qunit'], function (exports, _gaWdiBostonEmberResourcesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_gaWdiBostonEmberResourcesTestsHelpersResolver['default']);
});
define('ga-wdi-boston.ember-resources/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/application/adapter-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/application/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define("ga-wdi-boston.ember-resources/tests/unit/application/serializer-test", ["exports"], function (exports) {});
define('ga-wdi-boston.ember-resources/tests/unit/application/serializer-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/application/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/index/route-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/models/item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('item', 'Unit | Model | item', {
    // Specify the other units that are required for this test.
    needs: ['model:list']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/models/item-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/item-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/item-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/models/list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('list', 'Unit | Model | list', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/models/list-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/list-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/routes/list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:list', 'Unit | Route | list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/routes/list-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/list-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/routes/lists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:lists', 'Unit | Route | lists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ga-wdi-boston.ember-resources/tests/unit/routes/lists-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/lists-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/lists-test.js should pass jshint.');
  });
});
define("ga-wdi-boston.ember-resources/tests/unit/serializers/application-test", ["exports"], function (exports) {});
define('ga-wdi-boston.ember-resources/tests/unit/serializers/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/serializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
require('ga-wdi-boston.ember-resources/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
