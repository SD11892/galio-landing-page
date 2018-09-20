;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-templates.js' */
// This file was automatically generated from main_view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.fileView = function(opt_data, opt_ignored) {
  return '<div id="cp-header" class="aui-group"></div><div id="cp-body" class="aui-group"></div><div id="cp-footer"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileView.soyTemplateName = 'FileViewer.Templates.fileView';
}


FileViewer.Templates.titleContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.iconClass) + ' size-24 cp-file-icon"></span>' + soy.$$escapeHtml(opt_data.title);
};
if (goog.DEBUG) {
  FileViewer.Templates.titleContainer.soyTemplateName = 'FileViewer.Templates.titleContainer';
}


FileViewer.Templates.controlDownloadButton = function(opt_data, opt_ignored) {
  return '<a role="button" tabindex="55" id="cp-control-panel-download" href="' + soy.$$escapeHtml(opt_data.src) + '" title="' + soy.$$escapeHtml("Download") + '" class="cp-icon" target="_blank" download>' + soy.$$escapeHtml("Download") + '</a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlDownloadButton.soyTemplateName = 'FileViewer.Templates.controlDownloadButton';
}


FileViewer.Templates.controlCloseButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="60" id="cp-control-panel-close" href="#" title="' + soy.$$escapeHtml("Close") + '" class="cp-icon">' + soy.$$escapeHtml("Close") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlCloseButton.soyTemplateName = 'FileViewer.Templates.controlCloseButton';
}


FileViewer.Templates.moreButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="50" id="cp-control-panel-more" aria-owns="cp-more-menu" aria-haspopup="true" class="cp-icon aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" title="' + soy.$$escapeHtml("More") + '">' + soy.$$escapeHtml("More") + '</button><div id="cp-more-menu" class="aui-dropdown2 aui-style-default" data-fv-allow-focus><ul class="aui-list-truncate"></ul></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreButton.soyTemplateName = 'FileViewer.Templates.moreButton';
}


FileViewer.Templates.moreMenuItem = function(opt_data, opt_ignored) {
  return '<li><a href="#">' + soy.$$escapeHtml(opt_data.text) + '</a></li>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreMenuItem.soyTemplateName = 'FileViewer.Templates.moreMenuItem';
}


FileViewer.Templates.fileComments = function(opt_data, opt_ignored) {
  return '<div id="cp-comments"/>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileComments.soyTemplateName = 'FileViewer.Templates.fileComments';
}


FileViewer.Templates.fileBodySpinner = function(opt_data, opt_ignored) {
  return '<div class="cp-spinner"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodySpinner.soyTemplateName = 'FileViewer.Templates.fileBodySpinner';
}


FileViewer.Templates.fileBodyArrows = function(opt_data, opt_ignored) {
  return '<button class="cp-nav" id="cp-nav-left" tabindex=20 disabled-title="' + soy.$$escapeHtml("You\'re viewing the least recent file") + '">' + soy.$$escapeHtml("Go to the previous file") + '</button><button class="cp-nav" id="cp-nav-right" tabindex=20  disabled-title="' + soy.$$escapeHtml("You\'re viewing the most recent file") + '">' + soy.$$escapeHtml("Go to the next file") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodyArrows.soyTemplateName = 'FileViewer.Templates.fileBodyArrows';
}
// This file was automatically generated from unknown-file-type-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.unknownFileTypeViewer = function(opt_data, opt_ignored) {
  return '<div id="cp-unknown-file-type-view"><span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span><p class="title">' + soy.$$escapeHtml("Ouch! We can\'t preview this file type.") + '<br>' + soy.$$escapeHtml("Try downloading the file to view it.") + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.unknownFileTypeViewer.soyTemplateName = 'FileViewer.Templates.unknownFileTypeViewer';
}
// This file was automatically generated from layers.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.displayError = function(opt_data, opt_ignored) {
  return '<div id="cp-error-message">' + ((opt_data.icon) ? '<span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.icon) + '"></span>' : '<span class="file-icon size-96 cp-unknown-file-type-icon"></span>') + '<p class="title">' + soy.$$escapeHtml(opt_data.title) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p>' + ((opt_data.srcBrowser) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcBrowser) + '" target="_blank"><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Open in browser") + '</a>' : '') + ((opt_data.srcDownload) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcDownload) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a>' : '') + '</div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.displayError.soyTemplateName = 'FileViewer.Templates.displayError';
}


FileViewer.Templates.passwordLayer = function(opt_data, opt_ignored) {
  return '<div id="cp-preview-password"><span class="cp-password-lock-icon"></span><div class="cp-password-base"><p class="title">' + soy.$$escapeHtml(opt_data.prompt) + '</p><input tabindex="5" type="password" name="password" class="cp-password-input" placeholder="' + soy.$$escapeHtml("Password") + '" autocomplete="off"><button tabindex="10" class="aui-button cp-password-button">' + soy.$$escapeHtml("OK") + '</button></div><div class="cp-password-fullscreen"><p class="title">' + soy.$$escapeHtml("This file is password protected.") + '</p><p class="message">' + soy.$$escapeHtml("Due to technical reasons you have to leave presentation mode to enter the password.") + '</p></div></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.passwordLayer.soyTemplateName = 'FileViewer.Templates.passwordLayer';
}


FileViewer.Templates.waitingMessage = function(opt_data, opt_ignored) {
  return '<div id="cp-waiting-message"><span class="file-icon size-96 cp-waiting-message-spinner"></span><p class="title">' + soy.$$escapeHtml(opt_data.header) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.waitingMessage.soyTemplateName = 'FileViewer.Templates.waitingMessage';
}


FileViewer.Templates.toolbar = function(opt_data, opt_ignored) {
  var output = '<div class="cp-toolbar">';
  var actionList55 = opt_data.actions;
  var actionListLen55 = actionList55.length;
  for (var actionIndex55 = 0; actionIndex55 < actionListLen55; actionIndex55++) {
    var actionData55 = actionList55[actionIndex55];
    output += '<button tabindex="' + soy.$$escapeHtml(actionIndex55 + 10) + '" class="' + soy.$$escapeHtml(actionData55.className) + ' cp-icon" title="' + soy.$$escapeHtml(actionData55.title) + '">' + soy.$$escapeHtml(actionData55.title) + '</button>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  FileViewer.Templates.toolbar.soyTemplateName = 'FileViewer.Templates.toolbar';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer.js' */
(function () {
    'use strict';

// holds module definitions used for setup and dependency tracking
var _modules = {};

// defines a new module with the given dependencies and factory function
var define = function (name, dependencies, factoryFn) {
    _modules[name] = {
      deps: dependencies,
      factory: factoryFn,
      value: null
    };
};

// recursively require module and its dependencies
// caches the results so that every module is instantiated only once
var require = function (name, mocks) {
    var module = require._normalizeMocks(mocks)[name] || _modules[name];
    if (!module) { throw new Error('module not found ' + name); }
    if (!module.value) {
      module.value = module.factory.apply(null, module.deps.map(function (name) {
        return require(name, mocks);
      }));
    }
    return module.value;
};

require._normalizeMocks = function (mocks) {
  if (!mocks) { return {}; }
  var normalizedMocks = {};
  Object.keys(mocks).forEach(function (key) {
    normalizedMocks[key] = {
      deps: [],
      factory: function () { return mocks[key]; },
      value: null
    };
  });
  return normalizedMocks;
};

// define FileViewer dependencies
define('jquery',     [], function () { return jQuery;   });
define('underscore', [], function () { return _;        });
define('backbone',   [], function () { return Backbone; });
define('ajs',        [], function () { return AJS;      });

define('3d-view-provider', [
  'jquery'
], function (
  $
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var threeDViewProvider = function () {
    return $.Deferred().resolve(require('3d-view'));
  };

  return threeDViewProvider;
});
define('Analytics', ['underscore'], function (_) {
  'use strict';

  /**
   * Augments data and forwards them to a configured analytics backend.
   *
   * An analytics backend is just a function that accepts a key and a data
   * object. It is also responsible for filtering incoming data.
   *
   * For all data send, this module fetches current file and view state
   * and adds them to the data. The added keys are
   * - fileType
   * - fileId (hashed version of the file src)
   * - fileState (value of view state)
   *
   * @param analyticsBackend
   * @param fileViewer
   * @param hasher
   * @returns {Analytics}
   * @constructor
   */
  var Analytics = function (backend, fileViewer, hasher) {
    this._backend = backend;
    this._fileViewer = fileViewer;
    this._hasher = hasher;
  };

  /**
   * Forwards an analytics event to the configured backend.
   * @param {string} key
   * @param {Object} data
   */
  Analytics.prototype.send = function (key, data) {
    if (!this._backend) { return; }
    var file = this._fileViewer.getCurrentFile();
    var attributes = (file && file.attributes) || {};
    var augmentedData = _.extend({
      fileType: attributes.type,
      fileId: this._hasher(attributes.src || ''),
      fileState: this._fileViewer.getView().getViewState()
    }, data);
    this._backend(key, augmentedData);
  };

  /**
   * Returns a partially applied analytics function for use inside of
   * promise handlers.
   * @param {string} key
   * @param {object} data
   * @returns {function}
   */
  Analytics.prototype.fn = function (key, data) {
    return this.send.bind(this, key, data);
  };

  return Analytics;
});

define('ArrowLayer', [
  'backbone', 'template-store-singleton'
], function (
  Backbone, templateStore
) {
  'use strict';

  var AJS = window.AJS;

  /**
   * Controls to switch between multiple files in a collection.
   * @constructor
   */
  var ArrowLayer = Backbone.View.extend({

    className: 'cp-arrow-layer',

    events: {
      'click #cp-nav-left:not(.disabled)': 'gotoPrevious',
      'click #cp-nav-right:not(.disabled)': 'gotoNext'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.listenTo(this._fileViewer._fileState.collection, 'add reset', this.checkAndHideNavigation);
      this._visibleArrows = false;
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodyArrows')()).hide();
      this._updateElements();
      this.checkAndHideNavigation();

      return this;
    },

    /**
     * Show next file in collection.
     */
    gotoNext: function () {
      this._fileViewer.showFileNext().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.next', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Show previous file in collection.
     */
    gotoPrevious: function () {
      this._fileViewer.showFilePrev().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Enable disabled navigation arrow again and remove tooltip
     */
    enableArrow: function ($arrow) {
      $arrow.removeClass('disabled');
      $arrow.removeAttr('original-title');
    },

    /**
     * Disable navigation arrow and add tooltip
     * @param  {Object} options
     * @param  {Object} options.arrow
     * @param  {String} options.tooltipText
     * @param  {String} options.tooltipGravity
     */
    disableArrow: function (options) {
      options.arrow.addClass('disabled');
      options.arrow.attr('original-title', options.tooltipText);
      options.arrow.tooltip({ gravity: options.tooltipGravity });
    },

    /**
     * Returns true if either the left or right navigation arrow is shown
     * @return {Boolean}
     */
    showsArrow: function () {
      return this._visibleArrows;
    },

    /**
     * Check if controls should appear.
     * If there's only a single file in the collection, we don't show them.
     */
    checkAndHideNavigation: function () {
      if (this._fileViewer._fileState.collection.length <= 1) {
        this._visibleArrows = false;
        return this.$arrows.hide();
      }
      this.$arrows.show();
      this._visibleArrows = true;
      if (this._fileViewer.getConfig().enableListLoop) {
        return;
      }
      if (this._fileViewer.isShowingLastFile()) {
        this.disableArrow({
          arrow: this.$arrowRight,
          tooltipText: "You\'re viewing the most recent file",
          tooltipGravity: 'e'
        });
      } else if (this._fileViewer.isShowingFirstFile()) {
        this.disableArrow({
          arrow: this.$arrowLeft,
          tooltipText: "You\'re viewing the least recent file",
          tooltipGravity: 'w'
        });
      }
    },

    _updateElements: function () {
      this.$arrows = this.$el.find('.cp-nav');
      this.$arrowLeft = this.$el.find('#cp-nav-left');
      this.$arrowRight = this.$el.find('#cp-nav-right');
    }

  });

  return ArrowLayer;
});

define('assert',
  [],
  function () {

    /**
     * Throws an error if given predicate is falsy.
     *
     * @param {*} predicate
     * @param {string} description Used for the error message.
     */
    var assert = function (predicate, description) {
      description = description || 'untruthy value';

      if (!predicate) {
        throw new Error('Assertion failed: ' + description);
      }
    };

    return assert;
  }
);

define('asset-module-backend', [], function () {
  'use strict';

  return function (fileViewer) {

    /**
     * Assumes that all modules are included as static assets and therefore
     * already loaded. Uses FileViewer.getConfig().assets for the
     * module configuration.
     *
     * @param {String} moduleName
     * @return {Promise}
     */

    return function (moduleName) {
      if (moduleName === 'pdf-config') {
        return fileViewer.getConfig().assets['pdf-config'] || {};
      }
    };
  };

});
define('baseMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var baseMode = {

    activateHook: function (mainView) {
      mainView.$el.on('click #cp-file-body', mainView._onClickToBackground.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      mainView.$el.off('click #cp-file-body');
    },

    setup: function (mainView, viewer) {
      viewer && viewer.$el.on('click.contentView', viewer._clickedBackgroundToClose.bind(viewer));
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));
    },

    teardown: function (mainView, viewer) {
      viewer && viewer.$el.off('click.contentView');
      $(document).off('keydown.modeKeys');
    },

    showsArrowLayer: true,

    _handleKeys: function (e) {
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }

      if (!viewer || !(e.ctrlKey || e.metaKey)) { return; }

      if (
        e.which === keyboard.keys.PLUS ||
        e.which === keyboard.keys.PLUS_NUMPAD ||
        e.which === keyboard.keys.PLUS_FF
      ) {
        if (viewer.zoomIn) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
            actionType: 'hotkey'
          });
          viewer.zoomIn();
        }
        e.preventDefault();
      }

      if (
        e.which === keyboard.keys.MINUS ||
        e.which === keyboard.keys.MINUS_NUMPAD ||
        e.which === keyboard.keys.MINUS_FF
      ) {
        if (viewer.zoomOut) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
            actionType: 'hotkey'
          });
          viewer.zoomOut();
        }
        e.preventDefault();
      }

    },

    toolbarActions: [
      {
        title: "Zoom out",
        className: 'cp-toolbar-minus',
        predicate: function () {
          return this._viewer && this._viewer.zoomOut;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomOut) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
              actionType: 'button'
            });
            this._viewer.zoomOut();
          }
        }
      },
      {
        title: "Zoom in",
        className: 'cp-toolbar-plus',
        predicate: function () {
          return this._viewer && this._viewer.zoomIn;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomIn) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
              actionType: 'button'
            });
            this._viewer.zoomIn();
          }
        }
      },
      {
        title: "Fit to page",
        className: 'cp-toolbar-fit',
        predicate: function () {
          return this._viewer && this._viewer.zoomFit;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomFit) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomfit', {
              actionType: 'button'
            });
            this._viewer.zoomFit();
          }
        }
      },
      {
        title: "Start Presentation",
        className: 'cp-toolbar-presentation',
        predicate: function () {
          return this._viewer && this._fileViewer.getConfig().enablePresentationMode;
        },
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.enter');
          this._fileViewer.changeMode('PRESENTATION');
        }
      }
    ]
  };

  return baseMode;
});

define('BaseViewer', [
  'jquery', 'underscore', 'backbone'
], function ($, _, Backbone) {
  'use strict';

  /**
   * Base class for viewers.
   * @constructor
   */
  var BaseViewer = Backbone.View.extend({

    // Event listeners specific to this view namespaced to prevent collisions with its children.

    contentViewEvents: {
      'click.contentView': '_clickedBackgroundToClose',
      'mousedown.contentView': '_mousedownContentView'
    },

    // Merge events with children's event object to bind all event handlers

    initialize: function (options) {
      this.events = _.extend(this.events || {}, this.contentViewEvents);

      this._fileViewer = options.fileViewer;
      this._previewSrc = options.previewSrc;
      this._mousedownBackground = null;
    },

    teardown: function () {},

    // Listen to clicks to the background and eventually close the fileViewer.
    //
    // A viewer can specify getBackground if their background element isn't their contents

    _mousedownContentView: function (e) {
      var $background = this.getBackground ? this.getBackground() : this.$el;
      this._mousedownBackground = $(e.target).is($background);
    },

    _clickedBackgroundToClose: function (e) {
      // @TODO: Remove after cleaning modes setup, hooks etc.
      var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
      if (mode.disableClickBackgroundCloses) {
        return;
      }
      var $background = this.getBackground ? this.getBackground() : this.$el;
      if (this._mousedownBackground && $(e.target).is($background)) {
        this._fileViewer.analytics.send('files.fileviewer-web.closed', {
          actionType: 'element'
        });
        this._fileViewer.close();
      }
    },

    // This function is called whenever the viewport of the viewer changes size,
    // e.g. when a panel is opened or closed. Overwrite this function if you want
    // custom behaviour.
    handleResize: function () {}

  });

  return BaseViewer;
});

define('CloseButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var CloseButton = Backbone.View.extend({

    className: 'fv-close-button',

    events: {
      'click': '_close'
    },

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      this.$el.html(templateStore.get('controlCloseButton')());

      this.$('button').tooltip({ gravity: 'n' });

      return this;
    },

    _close: function (e) {
      e.preventDefault();
      this._fileViewer.analytics.send('files.fileviewer-web.closed', {
        actionType: 'button'
      });
      this._fileViewer.close();
    }
  });

  return CloseButton;
});

define('Commands', ['jquery', 'ajs', 'file'], function ($, AJS, File) {
  'use strict';

  // helper for $.reject()
  var rejectWithError = function (msg) {
    return new $.Deferred().reject(
      new Error(msg)
    ).promise();
  };

  /**
   * A couple of commands used by the MainView.showFile() method. It's intend is to break
   * up the long method into smaller, more testable pieces.
   * @module
   */
  var Commands = {};

  /**
   * A command that looks-up a viewer for a file.
   * @constructor
   * @param {File} originalFile
   * @param {ViewerRegistry} viewerRegistry
   */
  Commands.LookupViewer = function (originalFile, viewerRegistry) {
    this._originalFile = originalFile;
    this._viewerRegistry = viewerRegistry;
  };

  /**
   * Execute this command.
   * @param {string} previewSrc
   * @param {string} previewType
   * @param {object} overwrites
   * @returns {Promise<Viewer, string, File>} promises the viewer to use, the previewSrc and the converted file.
   */
  Commands.LookupViewer.prototype.execute = function (previewSrc, previewType, overwrites) {
    var convertedFile = new File(this._originalFile.toJSON());

    convertedFile.set(overwrites);

    convertedFile.set('type', previewType);
    convertedFile.set('src', previewSrc);

    var loadViewer = this._viewerRegistry.get(previewType);

    if (!loadViewer) {
      return rejectWithError("There is not viewer for this file type.");
    }
    var dfd = $.Deferred();
    loadViewer().then(function (Viewer) {
      dfd.resolve(Viewer, previewSrc, convertedFile);
    }).fail( function () {
      dfd.fail(arguments);
    });

    return dfd.promise();
  };

  return Commands;
});

define('defaultConfig', [], function () {
  /**
   * FileViwers configuration options:
   *
   * - appendTo {DOMNode} [$('body')] - DOM Element to append to
   * - files {Array} - An array of file objects
   * - commentService {Object} - Comments service
   * - templateBackend {Function} - Provides templates for a given name
   * - moduleBackend {Function} - Provides modules for a given name
   * - pdfTransportFactory {Function} - cb(currentFile):Promise<PDFTransport>
   * - enableListLoop {Boolean} [true] - Allow to navigate from end to start of file list and v.v.
   * - enablePresentationMode {Boolean} [true] - Allow switching to presentation mode
   * - preloadImagesAfterCurrent {Number} [2] - Files after current to preload if they are images.
   * - preloadImagesBeforeCurrent {Number} [0] - Files before current to preload if they are images.
   * - videoDefaultQualityHd {Boolean} [true] - By default play HD content if available
   * - customStorage {Object} [null] - Custom storage object with setItem, getItem, removeItem methods
   *
   * @exports defaultConfig
   */
  return {
    enableListLoop: true,
    enablePresentationMode: true,
    preloadImagesAfterCurrent: 2,
    preloadImagesBeforeCurrent: 0,
    videoDefaultQualityHd: true,
    customStorage: null,
    viewers: ['image', 'document', 'video', '3d'],
    embedded: false
  };
});

define('constants-dictionary', [
  'assert'
], function (
  assert
) {
  'use strict';

  /**
   * A constants dictionary is a dictionary where you can only define a
   * given name once.
   */
  var ConstantsDictionary = function () {
    this._valuesByName = {};
    this._names = [];
  };

  /**
   * Define a name with the given value.
   * @param {string} name The name that is being defined.
   * @param {*} value Any value, even undefined.
   * @throws Error if name is already defined.
   */
  ConstantsDictionary.prototype.define = function (name, value) {
    assert(!this.isDefined(name), 'name is unique');
    this._valuesByName[name] = value;
    this._names.push(name);
  };

  /**
   * Lookup a name with the given value.
   * @param {string} name The name to lookup.
   * @throws Error if name is not yet defined.
   */
  ConstantsDictionary.prototype.lookup = function (name) {
    assert(this.isDefined(name), 'name is defined');
    return this._valuesByName[name];
  };

  /**
   * Check if a name is defined.
   * @param {string} name The name to check.
   * @return {boolean}
   */
  ConstantsDictionary.prototype.isDefined = function (name) {
    return name in this._valuesByName;
  };

  /**
   * Lists all definitions in the order they were defined. Returns an array of objects
   * with name and value properties.
   * @return {Array}
   */
  ConstantsDictionary.prototype.list = function () {
    return this._names.map(function (name) {
      return {
        name: name,
        value: this._valuesByName[name]
      };
    }, this);
  };

  return ConstantsDictionary;
});
define('djb2', [], function () {

  var toCharCode = function (str) { return str.charCodeAt(0); };
  var updateHash = function (prev, curr) { return ((prev << 5) + prev) + curr; };

  /**
   * Create a djb2 hash from the given string.
   * Based on this module https://github.com/wearefractal/djb2.
   * @param {String} str
   * @returns {Number}
   */
  var djb2 = function (str) {
    return str.split('').map(toCharCode).reduce(updateHash, 5381);
  };

  return djb2;
});
define('DownloadButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var DownloadButton = Backbone.View.extend({

    tagName: 'span',

    events: {
      'click': '_triggerAnalytics'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._model = this._fileViewer.getCurrentFile();
    },

    render: function () {
      this.$el.html(templateStore.get('controlDownloadButton')({
        src: this._model.get('srcDownload') || this._model.get('src')
      }));

      this.$('a').tooltip({ gravity: 'n' });

      return this;
    },

    _triggerAnalytics: function () {
      this._fileViewer.trigger('fv.download');
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'button'
      });
    }

  }, {
    isDownloadable: function (fileViewer) {
      var file = fileViewer.getCurrentFile();
      return file && file.get('downloadable');
    }
  });

  return DownloadButton;
});

define('ErrorLayer', [
  'ajs', 'backbone', 'template-store-singleton'
], function (AJS, Backbone, templateStore) {
  'use strict';

  var ErrorLayer = Backbone.View.extend({

    className: 'cp-error-layer',

    initialize: function () {
      this.$el.hide();
    },

    showErrorMessage: function (err, file) {
      var title, description, icon, srcDownload, srcBrowser;
      title = err.title || "Ouch! We can\'t preview this file.";
      description = err.description || err.toString();
      icon = err.icon || false;
      srcBrowser = err.browser ? file.get('src') : false;
      srcDownload = err.download ? file.get('srcDownload') || file.get('src') : false;
      this.$el.show().html(templateStore.get('displayError')({
        title: title,
        message: description,
        icon: icon,
        srcBrowser: srcBrowser,
        srcDownload: srcDownload
      }));
    }

  });

  return ErrorLayer;
});

define('file-state',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var FileState = Backbone.Model.extend({

      defaults: {
        currentFileIndex: -1,
        isNewFileUploaded: false
      },

      setCollection: function (collection) {
        this.collection = collection;
      },

      setNext: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex < (this.collection.length - 1)) {
          this.set({currentFileIndex: this.get('currentFileIndex') + 1});
        } else {
          this.set({currentFileIndex: 0});
        }
      },

      setPrev: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex > 0) {
          this.set({currentFileIndex: this.get('currentFileIndex') - 1});
        } else {
          this.set({currentFileIndex: this.collection.length - 1});
        }
      },

      setNoCurrent: function () {
        this.set({ currentFileIndex: -1 });
      },

      setCurrentFileIndex: function (index) {
        if ((index > -1) && (index < this.collection.length)) {
          return this.set({currentFileIndex: index});
        }
      },

      setCurrentWithCID: function (cid) {
        return this.setCurrentFileIndex(this.collection.getIndexWithCID(cid));
      },

      getCurrent: function () {
        var current = this.collection.at(this.get('currentFileIndex'));
        return current || null;
      },

      selectWhere: function (selector) {
        if (selector) {
          var selected = this.collection.findWhere(selector);
          if (selected) {
            this.setCurrentWithCID(selected.cid);
          }
        } else if (this.collection.length >= 1) {
          this.setCurrentFileIndex(0);
        }
      },

      replaceCurrent: function (file) {
        var idx = this.get('currentFileIndex');
        this.collection.remove(this.collection.at(idx));
        this.collection.add(file, {at: idx});
      },

      setCurrentWithQuery: function (query) {
        var file = this.collection.findWhere(query);

        if (file) {
          this.setCurrentWithCID(file.cid);
        } else {
          this.setNoCurrent();
        }
      }

    });

    return FileState;
  });

define('file-types', [
],
  function (
    ) {
    'use strict';

    var browserSupportedImageTypes = [
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/web',
      'image/bmp'
    ];

    var browserSupportedMultimediaTypes = [
      'video/mp4',
      'video/m4v',
      'video/youtube',
      'audio/mp3',
      'audio/mpeg'
    ];

    var toLowerType = function (type) {
      return type && type.toLowerCase() || '';
    };

    var fileTypes = {
      isPDF: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/pdf';
      },

      isText: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/plain';
      },

      isCode: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/java'
          || lowerType === 'text/css'
          || lowerType === 'text/html'
          || lowerType === 'text/javascript'
          || lowerType === 'text/xml';
      },

      isMultimedia: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type)
          || /^audio\/.*/i.test(type)
          || lowerType === 'application/x-shockwave-flash'
          || lowerType === 'application/vnd.rn-realmedia'
          || lowerType === 'application/x-oleobject';
      },

      isArchive: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/zip'
          || lowerType === 'application/java-archive';
      },

      isImage: function (type) {
        return /^image\/.*/i.test(type);
      },

      isVideo: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type) || lowerType === 'video';
      },

      isAudio: function (type) {
        var lowerType = toLowerType(type);
        return /^audio\/.*/i.test(type) || lowerType === 'audio';
      },

      isYoutube: function (type) {
        var lowerType = toLowerType(type);
        return 'video/youtube' === lowerType;
      },

      isImageBrowserSupported: function (type) {
        return browserSupportedImageTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isMultimediaBrowserSupported: function (type) {
        return browserSupportedMultimediaTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isWordProcessing: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msword'
          || /^application\/vnd.ms-word.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.wordprocessingml.*/i.test(type);
      },

      isSpreadsheet: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msexcel'
          || /^application\/vnd.ms-excel.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.spreadsheet.*/i.test(type);
      },

      isPresentation: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/mspowerpoint'
          || /^application\/vnd.ms-powerpoint.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.presentationml.*/i.test(type);
      },

      is3D: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/x-sea';
      },

      matchAll: function () { return true; }
    };

    return fileTypes;
  });

define('file-viewer', [
  'jquery',
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary',
  'MainView',
  'file-state',
  'files',
  'file',
  'soy-template-backend',
  'asset-module-backend',
  'template-store-singleton',
  'module-store-singleton',
  'viewer-registry',
  'file-types',
  'defaultConfig',
  'storage',
  'image-view-provider',
  'pdf-view-provider',
  'video-view-provider',
  '3d-view-provider',
  'unknown-file-type-view-provider',
  'Analytics',
  'djb2'
],
function (
  $,
  _,
  Backbone,
  assert,
  ConstantsDictionary,
  MainView,
  FileState,
  Files,
  File,
  soyTemplateBackend,
  assetModuleBackend,
  templateStore,
  moduleStore,
  ViewerRegistry,
  fileTypes,
  defaultConfig,
  Storage,
  imageViewProvider,
  pdfViewProvider,
  videoViewProvider,
  threeDViewProvider,
  unknownFileTypeViewProvider,
  Analytics,
  djb2
) {
  'use strict';

  /**
   * Core API to integrate FileViewer into a project.
   *
   * @class
   * @alias FileViewer
   * @param {Object} config
   * @throws {Error} if config is invalid
   */
  var FileViewer = function (config) {
    config = _.defaults(config || {}, defaultConfig);
    config.appendTo = config.appendTo || $('body');
    FileViewer._instanceCount += 1;
    config.instanceId = FileViewer._instanceCount;

    templateStore.useBackend(config.templateBackend || soyTemplateBackend(this));
    moduleStore.useBackend(config.moduleBackend || assetModuleBackend(this));
    
    this._config = config;
    this._properties = new Backbone.Model();

    this._fileState = new FileState();
    this._viewerRegistry = new ViewerRegistry();
    this._analytics = new Analytics(config.analyticsBackend, this, djb2);

    if (config.viewers.indexOf('image') !== -1) {
      this._viewerRegistry.register(fileTypes.isImageBrowserSupported, imageViewProvider, 0);
    }
    if (config.viewers.indexOf('document') !== -1) {
      this._viewerRegistry.register(fileTypes.isPDF, pdfViewProvider, 0);
    }
    if (config.viewers.indexOf('video') !== -1) {
      this._viewerRegistry.register(fileTypes.isMultimediaBrowserSupported, videoViewProvider, 0);
    }
    if (config.viewers.indexOf('3d') !== -1) {
      this._viewerRegistry.register(fileTypes.is3D, threeDViewProvider, 0);
    }

    // set fallback viewer
    this._viewerRegistry.register(fileTypes.matchAll, unknownFileTypeViewProvider, 100);

    this._files = new Files(config.files || [], {
      service: config.commentService
    });
    this._fileState.setCollection(this._files);

    this._view = new MainView({
      model: new Backbone.Model({
        fileViewer: this,
        instanceId: config.instanceId,
        embedded: config.embedded
      })
    });

    this._isOpen = false;

    this._storage = new Storage(this.getConfig().customStorage, 'fileViewer.');

    FileViewer._plugins.list()
      .map(function (definition) { return definition.value; })
      .forEach(function (plugin) { plugin(this); }, this);
  };

  // internal nondecreasing counter
  FileViewer._instanceCount = 0;

  // privately expose available modules for debugging purposes
  // _modules is defined support/require.js
  /* eslint-disable no-undef */
  FileViewer._modules = _modules;
  /* eslint-enable no-undef*/

  // keeps track of registered plugins
  FileViewer._plugins = new ConstantsDictionary();

  /**
   * Current version of this build.
   *
   * @type {String}
   */
  FileViewer.VERSION = '1.4.6'; // replaced during build

  /**
   * Define a new module for the use with FileViewer.require().
   *
   * Be careful with the naming, because module names can be overwritten.
   *
   * @method
   * @param {String} moduleName
   * @param {Array} dependencies
   * @param {Function} factory
   */
  FileViewer.define = define;

  /**
   * Require a previously defined module by name.
   *
   * @method
   * @param {String} moduleName
   * @returns {*}
   */
  FileViewer.require = require;

  /**
   * Register a new plugin for use with FileViewer.
   *
   * @param {String} name
   * @param {Function} plugin
   * @throws {Error} if plugin is invalid or name already exists.
   */
  FileViewer.registerPlugin = function (name, plugin) {
    assert(this.isPlugin(plugin), 'is a plugin');
    this._plugins.define(name, plugin);
  };

  /**
   * Returns if a plugin is enabled for use with FileViewer.
   *
   * @param {String} name
   */
  FileViewer.isPluginEnabled = function (name) {
    return this._plugins.isDefined(name);
  };

  /**
   * Gets a plugin registered for use with FileViewer.
   *
   * @param {String} name
   * @throws {Error} if plugin is invalid or name does not already exists.
   */
  FileViewer.getPlugin = function (name) {
    return this._plugins.lookup(name);
  };

  /**
   * Checks if the given object is a valid plugin.
   *
   * @param {*} potentialPlugin
   * @returns {Boolean}
   */
  FileViewer.isPlugin = function (potentialPlugin) {
    return _.isFunction(potentialPlugin);
  };

  /**
   * Support .on(), .off() and .trigger().
   */
  _.extend(FileViewer.prototype, Backbone.Events);

  /**
   * Instance of the analytics module, use this to send analytics from your plugins.
   */
  Object.defineProperty(FileViewer.prototype, 'analytics', {
    get: function () { return this._analytics; }
  });

  /**
   * The instance of FileViewer was opened.
   *
   * @event FileViewer~'fv.open'
   */

  /**
   * Open this instance of FileViewer by appending it to the configured element. This needs to be called
   * before showing a file.
   *
   * When a fileQuery object is passed in, this file is shown and a special analytics event is triggered.
   * When you want to record, where this interaction is comming from, pass in
   * an additional analyticsSource
   *
   * @param {Object} [fileQuery]
   * @param {String} [analyticsSource]
   * @fires {FileViewer~'fv.open'}
   */
  FileViewer.prototype.open = function (fileQuery, analyticsSource) {
    this._view.render().show().$el.appendTo(this._config.appendTo);
    this._view.delegateEvents();

    this._isOpen = true;
    this.trigger('fv.open');

    if (fileQuery) {
      this.showFileWithQuery(fileQuery).always(
        this.analytics.fn('files.fileviewer-web.opened', {source: analyticsSource})
      );
    }
  };

  /**
   * The instance of FileViewer was closed.
   *
   * @event FileViewer~'fv.close'
   */

  /**
   * Shut down this instance of FileViewer by removing it from the configured element. Reset current file.
   *
   * @fires {FileViewer~'fv.close'}
   */
  FileViewer.prototype.close = function () {
    this._view._currentFile = null;
    this._view.undelegateEvents();
    this._view
      .hide()
      .$el.remove();

    this._isOpen = false;
    this.trigger('fv.close');
  };

  /**
   * Check if FileViewer is currently open.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isOpen = function () {
    return this._isOpen;
  };

  /**
   * The current file was changed and is about to be shown.
   *
   * @event FileViewer~'fv.changeFile'
   */

  /**
   * The current file has been rendered successfully.
   *
   * @event FileViewer~'fv.showFile'
   */

  /**
   * The current file has **not** been rendered successfully.
   *
   * @event FileViewer~'fv.showFileError'
   */

  /**
   * Show file that matches the given attribute query.
   *
   * A query is basically a set of values for certain keys that you want to match on. To match the file with id='a'
   * and src='test'.
   *
   *     {
   *     id: 'a',
   *     src: 'test'
   *     }
   *
   * @param {Object} query
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileWithQuery = function (query) {
    this._fileState.setCurrentWithQuery(query);
    var file = this._fileState.getCurrent();
    return this.showFile(file);
  };

  /**
   * Show the next file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileNext = function () {
    if (this.isShowingLastFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setNext();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * Show the previous file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFilePrev = function () {
    if (this.isShowingFirstFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setPrev();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * FileViewer#setFiles() was called.
   * @event FileViewer~'fv.setFiles'
   */

  /**
   * Set both the list of files as well as the current file.
   *
   * Ensures that the updated current file is shown if the viewer is open. Viewer caching might prevent a full
   * re-render.
   *
   * If no query is given or the query doesn't match a file in the collection, the current file is set to `null`,
   * causing an error message to be shown if the viewer is open.
   *
   * @param {Array.<Object>} newFiles
   * @param {Object} [nextFileQuery=null]
   * @fires {FileViewer~'fv.setFiles'}
   */
  FileViewer.prototype.setFiles = function (newFiles, nextFileQuery) {
    this._files.reset(newFiles);
    this._fileState.setCurrentWithQuery(nextFileQuery);

    this.trigger('fv.setFiles');

    if (this.isOpen()) {
      this.showFile(this._fileState.getCurrent());
    }
  };

  /**
   * Returns the file being shown in this viewer.
   *
   * @returns {Object} the file being shown
   */
  FileViewer.prototype.getCurrent = function () {
    var currentFile = this._view.getCurrentFile();
    return currentFile && currentFile.toJSON();
  };

  /**
   * Returns the file being shown in this viewer as a backbone model.
   *
   * **Note**: This method is deprecated, because it exposes a backbone model. See #getCurrent() instead.
   *
   * @returns {File} the file being shown
   * @deprecated
   */
  FileViewer.prototype.getCurrentFile = function () {
    return this._view.getCurrentFile();
  };

  /**
   * Returns the current files collection.
   *
   * @returns {Array.<Object>}
   */
  FileViewer.prototype.getFiles = function () {
    return this._files.toJSON();
  };

  /**
   * Check if current file is the first one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingFirstFile = function () {
    return this._fileState.attributes.currentFileIndex === 0;
  };

  /**
   * Check if current file is the last one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingLastFile = function () {
    return this._fileState.collection.length ===
      this._fileState.attributes.currentFileIndex + 1;
  };

  /**
   * The view mode was changed.
   *
   * @event FileViewer~'fv.changeMode'
   */

  /**
   * Change current view mode to the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @fires {FileViewer~'fv.changeMode'}
   */
  FileViewer.prototype.changeMode = function (mode) {
    this._view.setupMode(mode);
    this.trigger('fv.changeMode', mode);
  };

  /**
   * Return the current mode.
   *
   * @returns {String}
   */
  FileViewer.prototype.getMode = function () {
    return this._view.getMode();
  };

  /**
   * Check if FileViewer is in the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @returns {Boolean}
   */
  FileViewer.prototype.isInMode = function (mode) {
    return this._view.isInMode(mode);
  };

  /**
   * A file action was called.
   *
   * @callback FileViewer~fileActionCallback
   * @param {File} file
   */

  /**
   * Add a file action to the viewer.
   *
   * Actions can be registered asynchronously, and are reset when the user navigates to a new file.
   *
   * Commonly, a plugin will listen to the change file event and register a file action
   * conditionally for the displayed file. If a file action shares a key with a file
   * action that currently exists, addFileAction will replace the old action with the
   * new action.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action
   * @param {String} opts.text - the text display in the menu item
   * @param {FileViewer~fileActionCallback} opts.callback - a callback to be called when the menu item is selected
   * @throws Error if config is invalid or if no file is currently being viewed
   */
  FileViewer.prototype.addFileAction = function (opts) {
    assert(opts.key, 'has key');
    assert(opts.text, 'has text');
    assert(opts.callback, 'has a callback');
    this._view.fileControlsView.getLayerForName('moreButton').addFileAction(opts);
  };

  /**
   * Remove a file action from the viewer based on the key sent in the parameter.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action you want to remove
   * @throws {Error} if no key is provided or if no file is currently being viewed
   */
  FileViewer.prototype.removeFileAction = function (opts) {
    assert(opts.key, 'has key');
    this._view.fileControlsView.getLayerForName('moreButton').removeFileAction(opts);
  };

  /**
   * Check if the FileViewer supports native rendering of a given content type.
   *
   * @param {String} contentType the content type to check if supported
   * @returns {Boolean}
   */
  FileViewer.prototype.supports = function (contentType) {
    var previewer = this._viewerRegistry.get(contentType);
    return previewer && previewer !== unknownFileTypeViewProvider;
  };

  /**
   * Allows non-core code to get and set their own values on an instance of FileViewer.
   *
   * @param {String} key
   * @param {*} value
   */
  FileViewer.prototype.set = function (key, value) {
    this._properties.set(key, value);
  };

  /**
   * Access plugin level properties.
   *
   * @param {String} key
   * @returns {*}
   */
  FileViewer.prototype.get = function (key) {
    return this._properties.get(key);
  };

  /**
   * Returns the specified config.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getConfig = function () {
    return this._config;
  };

  /**
   * Returns the central view of FileViewer.
   *
   * @returns {MainView}
   */
  FileViewer.prototype.getView = function () {
    return this._view;
  };

  /**
   * Returns key-value storage of FileViewer.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getStorage = function () {
    return this._storage;
  };

  /**
   * **DEPRECATED** Show the given file.
   *
   * **Carefull**: This method doesn't set the current file from the collection and thus allows to set a file that
   * is not in the files array, thus causing buggy behaviour with next/prev file.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {File} file
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFile = function (file) {
    return this._showFile(file);
  };

  /**
   * **DEPRECATED** Show the file matching the given backbone object id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} cid
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithCID = function (cid) {
    this._fileState.setCurrentWithCID(cid);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Show the file matching the given id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} id
   * @param {String} [ownerId]
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithId = function (id, ownerId) {
    var fileQuery = { id: id };

    if (ownerId) { fileQuery.ownerId = ownerId; }

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show file with matching src.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} src
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithSrc = function (src) {
    var fileQuery = { src: src };

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show the first file matching the given selector. If selector is falsy, the first file in the
   * collection is shown.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {Object} selector
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWhere = function (selector) {
    this._fileState.selectWhere(selector);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Maps a file to some value which is used for strict equality checks (`===`).
   *
   * @callback FileViewer~updateFilesMapFn
   * @param {Object} file
   * @returns {*}
   * @deprecated
   */

  /**
   * **DEPRECATED** FileViewer#updateFiles() was called.
   *
   * @event FileViewer~'fv.updateFiles'
   * @deprecated
   */

  /**
   * **DEPRECATED** Update the files collection without updating the view state.
   *
   * **Carefull**: A call to `updateFiles()` neither changes the file currently shown nor causes a re-rendering. This
   * can cause state and view to get out of sync and is likely to introduce bugs. Therefore, this method should no
   * longer be used. See FileViewer#setFiles() instead.
   *
   * This method operates in two modes based on it's input.
   *
   * When invoked with nothing but `files`, the existing file collection is simply replaced with the new one.
   *
   * When an optional `mapFn` function is given, the behaviour changes drastically. Each file in the given `files`
   * array is compared with the already existing ones using `mapFn`.
   *
   * - If a file existed before, but isn't matched by a new file, it won't be updated, but stays in the collection.
   * - If a file existed before and is matched by a new file, it is updated and stays in the collection.
   * - If a file didn't exist before, it is appended to the collection
   *
   * @param {Array.<Object>} files
   * @param {FileViewer~updateFilesMapFn} [mapFn]
   * @returns {Array.<Object>}
   * @fires {FileViewer~'fv.updateFiles'}
   * @deprecated
   */
  FileViewer.prototype.updateFiles = function (files, mapFn) {
    if (!(mapFn && _.isFunction(mapFn))) {
      this._files.reset(files);
    } else {
      var newModels = _.chain(files)
        .map(function (file) {
          var matchedModel = this._files.find(function (collectionModel) {
            return mapFn(collectionModel.toJSON()) === mapFn(file);
          });
          if (matchedModel) {
            matchedModel.set(file);
          } else {
            return new File(file);
          }
        }.bind(this))
        .compact()
        .value();

      this._files.add(newModels, {silent: true});
      this._files.trigger('reset', this._files);
    }

    this.trigger('fv.updateFiles');

    return this._files.toJSON();
  };

  // shows the given backbone file model, triggers an event and returns a promise
  // @todo should resolve with a json description of the passed-in file
  FileViewer.prototype._showFile = function (file) {
    assert(this._isOpen, 'FileViewer is open');
    var triggerEvent = function (event) {
      return function () {
        this.trigger(event, file);
      }.bind(this);
    }.bind(this);
    this.trigger('fv.changeFile', file);
    return this._view.showFile(file)
      .done(triggerEvent('fv.showFile'))
      .fail(triggerEvent('fv.showFileError'));
  };

  return FileViewer;
});

define('file',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var File = Backbone.Model.extend({
      defaults: {
        src: '',
        type: '',
        thumbnail: '',
        poster: '',
        title: '',
        downloadable: true
      }
    });

    return File;
  });

define('files',
  [
    'backbone',
    'underscore',
    'file'
  ],
  function (
    Backbone,
    _,
    File) {

    'use strict';

    var Files = Backbone.Collection.extend({
      model: File,

      getIndexWithCID: function (cid) {
        return this.indexOf(this.get({cid: cid}));
      }
    });

    return Files;

  });

define('focus-manager-factory', ['assert', 'focus-manager-noop', 'focus-manager-impl'], function (assert, NoopFocusManager, FocusManager) {
  'use strict';

  /**
   * Transparent wrapper around FocusManager API that conditionally switches implementations.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManagerFactory = function ($el) {
    this.__element = $el;
  };

  FocusManagerFactory.prototype.create = function (embedded) {
    var ctor = embedded ? NoopFocusManager : FocusManager;
    return new ctor(this.__element);
  };

  return FocusManagerFactory;
});

define('focus-manager-impl', ['assert'], function (assert) {
  'use strict';

  var hasFocusOverride = function (element) {
    if (!element || !element.hasAttribute) { return false; }
    return element.hasAttribute('data-fv-allow-focus') || hasFocusOverride(element.parentElement);
  };

  /**
   * Trap focus for overlays and dialogs to enable proper keyboard navigation.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManager = function ($el) {
    assert($el, 'the first parameter to new FocusManager is a jQuery element');
    this.$container = $el;
    this._handler = this._focusHandler.bind(this);
  };

  /**
   * Trap element focus inside container element.
   */
  FocusManager.prototype.trapFocus = function () {
    this._unfocusParentPage();
    document.addEventListener('focus', this._handler, true);
  };

  /**
   * Stop trapping element focus inside container element.
   */
  FocusManager.prototype.releaseFocus = function () {
    document.removeEventListener('focus', this._handler, true);
    this._restoreFocus();
  };

  // Focus event handler.
  // On focus instantly blur the element if it is not a child of container
  // and set focus back to the container element.
  FocusManager.prototype._focusHandler = function (event) {
    if (
      !hasFocusOverride(event.target) &&
      this.$container &&
      !this.$container[0].contains(event.target)
    ) {
      event.stopPropagation();
      document.activeElement.blur();
      this.$container.attr('tabindex', 1);
      this.$container.focus();
    }
  };

  // Store active DOM element, unfocus it and then focus the container.
  FocusManager.prototype._unfocusParentPage = function () {
    this._originalActiveElement = document.activeElement;
    this._originalActiveElement.blur();
    this.$container.attr('tabindex', 1);
    this.$container.focus();
  };

  // Restore focus to the stored original active element.
  FocusManager.prototype._restoreFocus = function () {
    if (this._originalActiveElement) {
      this._originalActiveElement.focus();
    }
  };

  return FocusManager;
});

define('focus-manager-noop', [], function () {
  'use strict';
  
  var noop = function () {};

  var NoopFocusManager = function ($el) {};

  NoopFocusManager.prototype.trapFocus = noop;

  NoopFocusManager.prototype.releaseFocus = noop;

  return NoopFocusManager;
});
define('icon-utils', [
  'file-types'
],
function (fileTypes) {
  'use strict';

  var iconUtils = {
    getCssClass: function (type) {
      var iconClass = 'cp-unknown-file-type-icon';
      if (fileTypes.isImage(type)) {
        iconClass = 'cp-image-icon';
      } else if (fileTypes.isPDF(type)) {
        iconClass = 'cp-pdf-icon';
      } else if (fileTypes.isWordProcessing(type)) {
        iconClass = 'cp-document-icon';
      } else if (fileTypes.isSpreadsheet(type)) {
        iconClass = 'cp-spreadsheet-icon';
      } else if (fileTypes.isPresentation(type)) {
        iconClass = 'cp-presentation-icon';
      } else if (fileTypes.isText(type)) {
        iconClass = 'cp-text-icon';
      } else if (fileTypes.isCode(type)) {
        iconClass = 'cp-code-icon';
      } else if (fileTypes.isMultimedia(type)) {
        iconClass = 'cp-multimedia-icon';
      } else if (fileTypes.isArchive(type)) {
        iconClass = 'cp-archive-icon';
      }
      return iconClass;
    }
  };
  return iconUtils;
});

define('image-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns an image viewer.
   * @returns {Promise}
   */
  var imageViewProvider = function () {
    return $.Deferred().resolve(require('image-view'));
  };

  return imageViewProvider;
});
define('instance-manager',
  ['jquery'],
  function ($) {
    'use strict';

    /**
     * Ensures that there's only a single instance at the same time.
     * Accepts a createFn that is invoked and whose return value is
     * used as the instance.
     * @constructor
     * @param {Function} createFn
     * @param {Function} destroyFn
     */
    var InstanceManager = function (createFn, destroyFn) {
      this._createFn = createFn;
      this._destroyFn = destroyFn;
      this._instance = null;
      this._destroyDeferred = null;
    };

    /**
     * Promise a new instance. Resolves as soon as the previous one
     * is destroyed.
     * @return {Promise<Object>}
     */
    InstanceManager.prototype.create = function () {
      var args = arguments;
      var d = new $.Deferred();
      var destroyPromise = (this._destroyDeferred && this._destroyDeferred.promise()) || $.when();

      destroyPromise.then(function () {
        this._destroyDeferred = new $.Deferred();
        this._instance = this._createFn.apply(this._createFn, args);
        d.resolve(this._instance);
      }.bind(this));

      return d.promise();
    };

    /**
     * Destroy the current instance and unlock instance creation.
     */
    InstanceManager.prototype.destroy = function () {
      if (!this._destroyDeferred) {
        return;
      }
      this._destroyFn(this._instance);
      this._destroyDeferred.resolve();
    };

    return InstanceManager;

  }
);

define('keyboard', [], function () {
  var keys = {
    F: 70,
    G: 71,
    P: 80,
    RETURN: 13,
    ESCAPE: 27,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    PLUS: 187,
    MINUS: 189,
    PLUS_NUMPAD: 107,
    MINUS_NUMPAD: 109,
    PLUS_FF: 61,
    MINUS_FF: 173,
    SPACE: 32,
    ENTER: 13,
    TAB: 9
  };

  var createConditionalKeyHandler = function (fn) {
    return function (event) {
      var targetTagName = event.target.tagName && event.target.tagName.toUpperCase();

      // To not interfere with input elements we only invoke the
      // event handling method if the event target is not INPUT or TEXTAREA
      if (targetTagName !== 'INPUT' && targetTagName !== 'TEXTAREA') {
        return fn.call(this, event);
      }

      // Pressing ESCAPE while in input fields blurs input fields
      if (event.which === keys.ESCAPE) {
        event.target.blur();
      }
    };
  };

  return {
    keys: keys,
    createConditionalKeyHandler: createConditionalKeyHandler
  };
});

define('layer-container-view', [
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  _,
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  // utility functions for working with layers

  var invoke = function (fn) {
    return fn();
  };

  var pick = function (property, obj) {
    return obj[property];
  };

  var pickBoundFn = function (property, obj) {
    return _.isFunction(obj[property]) && obj[property].bind(obj);
  };

  /**
   * This view manages a collection of views which can be registered with a
   * given name. This view manages the lifecycle of its subviews.
   *
   * Subviews are always the View objects themselves, not instances of them.
   *
   * Subviews have two different states: ADDED and INITIALIZED. Whenever a
   * view is registered, it starts in state ADDED and stays there until
   * #initializeLayers() is called. Then it moves to INITIALIZED and stays
   * there until #teardownLayers() is called.
   *
   * When #render() is called on the collection, only INITIALIZED subviews are
   * rendered. Subviews can provide a teardown method that will be called
   * once the view is removed.
   *
   * Optionally, you can register subviews with a predicate to tell which
   * filetypes they support. It is invoked whenever the subviews are
   * initialized.
   */
  var FileContentLayerView = Backbone.View.extend({

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._layerViewsByName = new ConstantsDictionary();
      this._layerViewRegistrations = [];
      this._layers = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a layer with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasLayerView: function (name) {
      return this._layerViewsByName.isDefined(name);
    },

    /**
     * Adds a view as a layer with a certain, unique name. Accepts an
     * options object as third parameter.
     *
     * Keys in options:
     *  - {function} [predicate] invoked at construction
     *  - {int} [weight=0] sorts layers at construction
     *
     * @param {string} name
     * @param {Backbone.View} LayerView
     * @param {object} [options]
     * @throws Error if name is already used.
     */
    addLayerView: function (name, LayerView, options) {
      assert(!this.hasLayerView(name), 'name is unique');

      options = _.extend({
        predicate: function () { return true; },
        weight: 0
      }, options);

      this._layerViewsByName.define(name, LayerView);
      this._layerViewRegistrations.push({
        LayerView: LayerView,
        name: name,
        predicate: options.predicate,
        weight: options.weight
      });
    },

    /**
     * Checks wether layers are currently initialized.
     * @return {bool}
     */
    areLayersInitialized: function () {
      return this._layers !== null;
    },

    /**
     * Return the number of initialized layers (after applying the predicate)/
     * @return {Integer}
     */
    countInitializedLayers: function () {
      return (this._layers || []).length;
    },

    /**
     * Initializes all currently registered layers.
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayers: function () {
      this.initializeLayerSubset(_.map(this._layerViewRegistrations, function (item) { return item.name; }));
    },

    /**
     * Initializes the given registered layers.
     * @param {Array} names
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayerSubset: function (names) {
      assert(!this.areLayersInitialized(), 'layers are uninitialized');

      this._layers = this._layerViewRegistrations
                .filter(function (registration) {
                  var isInSubset = (names.indexOf(registration.name) !== -1);
                  return isInSubset && registration.predicate(this._fileViewer);
                }, this)
                .map(function (registration) {
                  var view = new registration.LayerView({
                    contentLayerView: this,
                    fileViewer: this._fileViewer
                  });
                  return {
                    view: view,
                    name: registration.name,
                    weight: registration.weight
                  };
                }, this);

      // sort by weight using the stable _.sortBy function to keep
      // registration order for same weights
      this._layers = _.sortBy(this._layers, function (layer) {
        return layer.weight * -1;
      });

      this.trigger('initializeLayers');

      this.render();
    },

    /**
     * Tears initialized layers down and removes them.
     * Won't throw if layers are not initialized.
     * @fires teardownLayers
     */
    teardownLayers: function () {
      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'teardown'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'remove'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers = null;
      }

      this.trigger('teardownLayers');

      this.render();
    },

    /**
     * Utitily method. Calls teardownLayers() followed by initializeLayers().
     */
    reinitializeLayers: function () {
      this.teardownLayers();
      this.initializeLayers();
    },

    /**
     * Checks wether a layer with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isLayerInitialized: function (name) {
      if (!this.areLayersInitialized()) { return false; }

      return _.find(this._layers, function (layer) {
        return layer.name === name;
      }) ? true : false;
    },

    /**
     * Returns the instanciated LayerView object for the given name.
     * @param {string} name Name of the registered LayerView.
     * @return {layerView}
     * @throws {Error} if layer is not initialized
     */
    getLayerForName: function (name) {
      assert(this.areLayersInitialized(), 'layers are initialized');
      assert(this.hasLayerView(name), 'layer is defined');

      var layer = _.find(this._layers, function (layer) {
        return layer.name === name;
      });

      assert(layer, 'layer is initialized');

      return layer.view;
    },

    /**
     * Renders initialized layers.
     * Won't throw if layers are not initialized.
     * @fires renderLayers
     */
    render: function () {
      this.$el.empty();

      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'render'))
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pick, '$el'))
              .forEach(function ($layer) {
                this.$el.append($layer);
              }, this);
      }

      this.trigger('renderLayers');

      return this;
    }

  });

  return FileContentLayerView;
});
define('MainView',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'focus-manager-factory',
    'files',
    'file',
    'TitleView',
    'DownloadButton',
    'CloseButton',
    'MoreButton',
    'ViewerLayer',
    'panel-container-view',
    'layer-container-view',
    'ErrorLayer',
    'WaitingLayer',
    'PasswordLayer',
    'ArrowLayer',
    'ToolbarLayer',
    'SpinnerLayer',
    'template-store-singleton',
    'keyboard',
    'baseMode',
    'presentationMode',
    'Commands'
  ],
  function (
    AJS,
    Backbone,
    _,
    $,
    FocusManagerFactory,
    Files,
    File,
    TitleView,
    DownloadButton,
    CloseButton,
    MoreButton,
    ViewerLayer,
    PanelContainerView,
    LayerContainerView,
    ErrorLayer,
    WaitingLayer,
    PasswordLayer,
    ArrowLayer,
    ToolbarLayer,
    SpinnerLayer,
    templateStore,
    keyboard,
    baseMode,
    presentationMode,
    Commands
  ) {
    'use strict';

    var rejectWithError = function (msg) {
      return new $.Deferred().reject(
        new Error(msg)
      ).promise();
    };

    /**
     * Core view of FileViewer.
     * @constructor
     * @param {Object} params
     */
    var MainView = Backbone.View.extend({

      attributes: function () {
        return {
          'id': 'cp-container-' + this.model.get('instanceId'),
          'data-embedded': this.model.get('embedded'),
          'role': 'dialog',
          'aria-labelledby': 'cp-title-container'
        };
      },

      initialize: function (params) {
        var options = _.extend({}, params);

        this._fileViewer = options.model.get('fileViewer');
        this._currentFile = null;
        this._viewState = null;
        this._focusManager = new FocusManagerFactory(this.$el).create(this.model.get('embedded'));

        this.fileTitleView = new PanelContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-title-container',
          className: 'aui-item'
        });

        this.fileControlsView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-file-controls',
          className: 'aui-item'
        });

        this.fileMetaView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-meta'
        });

        this.fileSinkView = new PanelContainerView({
          id: 'cp-sink',
          collection: this._fileViewer._fileState.collection,
          fileViewer: this._fileViewer
        });

        this.fileSidebarView = new PanelContainerView({
          id: 'cp-sidebar',
          fileViewer: this._fileViewer,
          collection: this._fileViewer._fileState.collection
        });

        this.fileContentView = new LayerContainerView({
          id: 'cp-file-body',
          fileViewer: this._fileViewer
        });

        this.fileTitleView.addPanelView('title', TitleView);
        this.fileControlsView.addLayerView('downloadButton', DownloadButton, {
          weight: 10,
          predicate: DownloadButton.isDownloadable
        });
        this.fileControlsView.addLayerView('moreButton', MoreButton);
        this.fileControlsView.addLayerView('closeButton', CloseButton);
        this.fileContentView.addLayerView('content', ViewerLayer);
        this.fileContentView.addLayerView('error', ErrorLayer);
        this.fileContentView.addLayerView('password', PasswordLayer);
        this.fileContentView.addLayerView('toolbar', ToolbarLayer);
        this.fileContentView.addLayerView('waiting', WaitingLayer);
        this.fileContentView.addLayerView('spinner', SpinnerLayer);
        this.fileContentView.addLayerView('arrows', ArrowLayer);

        this.listenTo(this.fileSidebarView, 'togglePanel', this._updateContentWidth);
        this.listenTo(this.fileSinkView, 'togglePanel', this._updateContentHeight);

        this._navigationKeyLockCount = 0;
        this._showFileChain = $.when();

        this._mode = 'BASE';
        this._modes = {
          'BASE': baseMode,
          'PRESENTATION': presentationMode
        };

        this._fixTooltipCleanup();
      },

      /**
       * Show.
       * @return {MainView} this
       */
      show: function () {
        this.$el.show();
        $(this._fileViewer._config.appendTo).addClass('no-scroll');

        // Blur focussed state for mouse users
        this.$el.on('mouseup mousedown', 'a', function (e) {
          this.blur();
        });
        this.$el.on('mouseup mousedown', 'button', function (e) {
          this.blur();
        });

        $(document).on('keydown.disableDefaultKeys', this._disableKeyboardShortcuts.bind(this));
        $(document).on('keydown.navKeys', keyboard.createConditionalKeyHandler(
          this._handleNavigationKeys.bind(this)
        ));

        return this;
      },

      /**
       * Hide.
       * @return {MainView} this
       */
      hide: function () {
        this.$el.hide();
        $(this._fileViewer._config.appendTo).removeClass('no-scroll');

        $(document).off('keydown.disableDefaultKeys');
        $(document).off('keydown.navKeys');
        $(document).off('keydown.modeKeys');

        this._deactivateModeHook();
        this._modes[this._mode].teardown(this);
        this._teardownAll();

        return this;
      },

      /**
       * Render.
       * @return {MainView} this
       */
      render: function () {
        this.$el.empty().append(templateStore.get('fileView')());

        this.$header = this.$('#cp-header');
        this.$body = this.$('#cp-body');
        this.$footer = this.$('#cp-footer');

        this.$title = this.fileTitleView.render().$el.appendTo(this.$header);
        this.$controls = this.fileControlsView.render().$el.appendTo(this.$header);

        this.$content = this.fileContentView.render().$el.appendTo(this.$body);
        this.$sidebar = this.fileSidebarView.render().$el.appendTo(this.$body);

        this.$meta = this.fileMetaView.render().$el.appendTo(this.$footer);
        this.$sink = this.fileSinkView.render().$el.appendTo(this.$footer);

        this.$el.on('click', 'a[href="#"]', function (e) {
          e.preventDefault();
        });

        this._focusManager.trapFocus();

        return this;
      },

      /**
       * MainView is starting to show the content of a new file.
       *
       * If the file src and type didn't change, this event won't be triggered.
       * If the file doesn't exist, this evemt won't be triggered as well.
       *
       * @event MainView~'fv.fileChange'
       */

      /**
       * Internal event to allow people to stop what they are doing when
       * the user already switched to the next file.
       *
       * @event MainView~'cancelShow'
       */

      /**
       * Show the given file. If one of the following conditions is true
       *
       *   1. file is invalid
       *   2. no viewer for that fileType is registered
       *   3. the viewer code can't be loaded
       *   4. the viewer couldn't be created
       *
       * then the returned promise is rejected. In that case, fileView changes
       * state and displays the error internally.
       *
       * When the new file and the current file have the same src and type attributes,
       * this method will not perform a re-rendering.
       *
       * @param {File} file
       * @return {Promise.<File>} the given file
       * @fires {MainView~'fv.fileChange'}
       * @fires {MainView~'cancelShow'}
       */
      showFile: function (file) {
        var needsToRerenderContent = !this.fileContentView.isLayerInitialized('content') || MainView._needsToRerenderContent(this._currentFile, file);

        if (MainView._filesWillRenderTheSame(this._currentFile, file)) {
          return MainView._skipRenderingOf(file);
        }

        var contentView, toolbarView, spinnerView, waitingView, errorView;

        var lookupViewerCommand = new Commands.LookupViewer(file, this._fileViewer._viewerRegistry);

        // allow people to shut down themselves
        this.trigger('cancelShow');

        var fileViewed = new $.Deferred();

        this._showFileChain.pipe(function () {
          var fileHandled = new $.Deferred();

          var p = $.when().pipe(function validateFile () {

            this._currentFile = file;
            this._viewState = null;
            var validationResult;

            if (file) {
              if (needsToRerenderContent) {
                this.trigger('fv.fileChange', file);
                this._reinitializeAllSubviews();
              } else {
                this._reinitializeNonContentSubviews();
              }

              contentView = this.fileContentView.getLayerForName('content');
              toolbarView = this.fileContentView.getLayerForName('toolbar');
              spinnerView = this.fileContentView.getLayerForName('spinner');
              waitingView = this.fileContentView.getLayerForName('waiting');
            } else {
              this._viewState = 'fileNotFound';
              this._reinitializeCoreSubviews();
              validationResult = rejectWithError("The file does not exist.");
            }
            errorView = this.fileContentView.getLayerForName('error');
            this._deactivateModeHook();
            this._activateModeHook();

            if (this && this._fileViewer && this._fileViewer.lastFocusId) {
              $('#' + this._fileViewer.lastFocusId).focus();
            }

            return validationResult;
          }.bind(this));

          if (needsToRerenderContent) {
            p = p.pipe(function getConverted () {
              var isPreviewGenerated = this._fileViewer.getConfig().isPreviewGenerated;
              var generatePreview = this._fileViewer.getConfig().generatePreview;

              spinnerView.startSpin();

              if (this._fileViewer.supports(file.get('type'))) {
                return $.when(file.get('src'), file.get('type'));
              }

              if (!(isPreviewGenerated && generatePreview)) {
                return $.when(file.get('src'), file.get('type'));
              }

              return isPreviewGenerated(file).pipe(function (isGenerated, source, type, overwrites) {
                if (isGenerated) {
                  return $.when(source, type, overwrites);
                }

                spinnerView.stopSpin();
                waitingView.showMessage(
                  file,
                  "Your preview is on its way!",
                  "In a hurry? You can download the original right now."
                );

                return generatePreview(file).always(function () {
                  waitingView.clearMessage();
                  spinnerView.startSpin();
                });
              });

            }.bind(this))
            .pipe(lookupViewerCommand.execute.bind(lookupViewerCommand))
            .pipe(function createViewer (Viewer, previewSrc, convertedFile) {

              var readyDeferred = new $.Deferred();
              var view = new Viewer({
                previewSrc: previewSrc,
                model: new File(convertedFile.toJSON()),
                fileViewer: this._fileViewer
              });

              view.once('viewerReady', function () {
                this._viewState = 'success';
                toolbarView.setViewer(view);
                this.setupMode(this._mode);
                readyDeferred.resolve(file);
              }.bind(this));
              view.once('viewerFail', function (err) {
                this._viewState = 'viewerError';
                readyDeferred.reject(err);
                this.setupMode(this._mode);
              }.bind(this));

              contentView.attachViewer(view);

              view.render();

              return readyDeferred.promise();

            }.bind(this))
            .always(function () {
              spinnerView && spinnerView.stopSpin();
              waitingView && waitingView.clearMessage();
            }.bind(this))
            .fail(function (err) {
              fileViewed.reject(err);
              if (err !== 'cancelled') {
                errorView.showErrorMessage(err, file);
              }
            }.bind(this));
          }

          p.done(function () {
            fileViewed.resolve(file);
          })
          .always(function () {
            fileHandled.resolve();
          }.bind(this));

          return fileHandled.promise();
        }.bind(this));

        return fileViewed.promise();
      },

      /**
       * Return the currently shown file.
       * @returns {null|File} the file being shown
       */
      getCurrentFile: function () {
        return this._currentFile;
      },

      /**
       * Return the current view state.
       * Can be any of the following
       * loading, fileNotFound, viewerError, success
       * @returns {String}
       */
      getViewState: function () {
        return this._viewState || 'loading';
      },

      _reinitializeAllSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileContentView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeNonContentSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeCoreSubviews: function () {
        this._teardownAll();

        this.fileControlsView.initializeLayerSubset(['closeButton']);
        this.fileContentView.initializeLayerSubset(['arrows', 'error']);
      },

      _teardownAll: function () {
        this.fileTitleView.teardownPanel();
        this.fileSidebarView.teardownPanel();
        this.fileSinkView.teardownPanel();
        this.fileMetaView.teardownLayers();
        this.fileControlsView.teardownLayers();
        this.fileContentView.teardownLayers();
        this._focusManager.releaseFocus();
      },

      _handleNavigationKeys: function (e) {
        var numFiles = this._fileViewer._files.length;
        var usedModifierKey = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

        if (e.which === keyboard.keys.ESCAPE && !this.isNavigationLocked()) {
          e.preventDefault();
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'hotkey'
          });
          this._fileViewer.close();
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_RIGHT
        ) {
          e.preventDefault();
          this._fileViewer.showFileNext().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.next', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_LEFT
        ) {
          e.preventDefault();
          this._fileViewer.showFilePrev().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        }
      },

      /**
       * Lock navigation keys. Navigation keys will be disabled until all
       * locks are removed again with unlockNavigationKeys.
       */
      lockNavigationKeys: function () {
        this._navigationKeyLockCount += 1;
      },

      /**
       * Unlock navigation keys.
       */
      unlockNavigationKeys: function () {
        if (this._navigationKeyLockCount >= 1) {
          this._navigationKeyLockCount -= 1;
        }
      },

      /**
       * Checks if the navigation is locked.
       */
      isNavigationLocked: function () {
        return this._navigationKeyLockCount !== 0;
      },

      _disableKeyboardShortcuts: function (e) {
        if (e.ctrlKey || e.metaKey) {
          switch (e.which) {
            case keyboard.keys.F:
            case keyboard.keys.G:
              // disable search keyboard shortcut
              e.preventDefault();
              break;
            case keyboard.keys.P:
              // disable print keyboard shortcut
              e.preventDefault();
              break;
          }
        }
      },

      _onClickToBackground: function (e) {
        // @TODO: Remove after cleaning modes setup, hooks etc.
        var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
        if (mode.disableClickBackgroundCloses) {
          return;
        }
        var backgroundLayers = [
          'cp-error-layer',
          'cp-waiting-layer',
          'cp-password-layer'
        ];
        if (backgroundLayers.indexOf(e.target.className) >= 0) {
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'element'
          });
          this._fileViewer.close();
        }
      },

      _updateContentWidth: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('narrow', isExpanded);
        this._resizeActiveViewer();
      },

      _updateContentHeight: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('short', isExpanded);
        this.$sidebar && this.$sidebar.toggleClass('short', isExpanded);
        this._resizeActiveViewer();
      },

      _updateMetaBannerHeight: function () {
        var showsMetaView = this.fileMetaView.countInitializedLayers() > 0;
        this.fileContentView.$el.toggleClass('meta-banner', showsMetaView);
        this.fileSidebarView.$el.toggleClass('meta-banner', showsMetaView);
      },

      _resizeActiveViewer: function () {
        if (this.fileContentView.isLayerInitialized('content')) {
          var contentView = this.fileContentView.getLayerForName('content');
          var viewer = contentView.getAttachedViewer();
          if (viewer) { viewer.handleResize(); }
        }
      },

      // aui tooltips (tipsy) are appended to body. A tooltip will thus stay alive
      // if the trigger element is removed. In here, we clean them up manually
      // whenever a file changes or the whole viewer is closed.
      _fixTooltipCleanup: function () {
        var removeAllTooltips = function () { $('.tipsy').remove(); };
        this._fileViewer.on('fv.changeFile', removeAllTooltips);
        this._fileViewer.on('fv.close', removeAllTooltips);
      },

      /**
       * Return the current mode.
       * @returns {string}
       */
      getMode: function () {
        return this._mode || '';
      },

      /**
       * Check if FileView is in the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       * @returns {boolean}
       */
      isInMode: function (mode) {
        return this._mode === mode;
      },

      /**
       * Change current view mode to the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       */
      setupMode: function (mode) {
        var toolbar = this.fileContentView.getLayerForName('toolbar');
        var viewer = toolbar._viewer;
        var $arrowLayer = this.fileContentView.getLayerForName('arrows').$el;

        var lastMode = this._mode;
        var isModeChanged = (lastMode !== mode);

        var modeObj = this._modes[mode];
        var lastModeObj = this._modes[lastMode];

        if (isModeChanged) {
          this._deactivateModeHook();
          this._mode = mode;
          this._activateModeHook();
        } else {
          this._mode = mode;
        }

        $(document).off('keydown.modeKeys');
        lastModeObj.teardown(this, viewer, isModeChanged);
        modeObj.setup(this, viewer);

        // update arrow layer
        $arrowLayer.toggle(modeObj.showsArrowLayer);

        // update toolbar actions
        toolbar.setActions(modeObj.toolbarActions);
        toolbar.render();

        // notify viewer
        if (viewer && viewer.setupMode) {
          viewer.setupMode(mode, isModeChanged);
        }
      },

      _activateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.activateHook) {
          mode.activateHook(this);
        }
      },

      _deactivateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.deactivateHook) {
          mode.deactivateHook(this);
        }
      },

      updatePaginationButtons: function () {
        if (this.isInMode('PRESENTATION')) {
          var toolbar = this.fileContentView.getLayerForName('toolbar');
          if (!toolbar._viewer) {
            return;
          }

          var $toolbarPrevPage = toolbar.$el.find('.cp-toolbar-prev-page');
          var $toolbarNextPage = toolbar.$el.find('.cp-toolbar-next-page');

          $toolbarPrevPage.toggleClass('inactive', false);
          $toolbarNextPage.toggleClass('inactive', false);

          if (!(toolbar._viewer.hasPreviousPage() || toolbar._viewer.hasNextPage())) {
            $toolbarPrevPage.hide();
            $toolbarNextPage.hide();
          } else if (!toolbar._viewer.hasPreviousPage()) {
            $toolbarPrevPage.toggleClass('inactive', true);
          } else if (!toolbar._viewer.hasNextPage()) {
            $toolbarNextPage.toggleClass('inactive', true);
          }
        }
      }
    });

    MainView._filesWillRenderTheSame = function (fileA, fileB) {
      if (!fileA || !fileB) { return false; }
      return _.isEqual(fileA.attributes, fileB.attributes);
    };

    MainView._needsToRerenderContent = function (fileA, fileB) {
      if (!fileA || !fileB) { return true; }
      var didTypeChange = fileA.get('type') !== fileB.get('type');
      var didSrcChange = fileA.get('src') !== fileB.get('src');
      var didThumbChange = fileA.get('thumbnail') !== fileB.get('thumbnail');
      return didTypeChange || didSrcChange || didThumbChange;
    };

    MainView._skipRenderingOf = function (file) {
      return $.when(file);
    };

    return MainView;
  });

define('module-store-singleton', [
  'module-store'
], function (
  ModuleStore
) {
  'use strict';

  /**
   * Global module store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new ModuleStore();
});
define('module-store', [
  'assert',
  'jquery',
  'underscore'
], function (
  assert,
  $,
  _
) {
  'use strict';

  /**
   * Provides modules by asking a previously configured backend.
   *
   * As modules can be loaded async, a promise is always returned.
   *
   * A backend is a function that accepts a module path and returns the
   * matched module. If no module is found, it returns undefined.
   *
   * @constructor
   */
  var ModuleStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  ModuleStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given modulePath and returns a promise.
   * @param {string} modulePath
   * @return {Promise}
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.get = function (modulePath) {
    assert(ModuleStore.validBackend(this._backend), 'backend is valid');
    return $.when(this._backend(modulePath));
  };

  /**
   * Sets a backend for this module store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.useBackend = function (backend) {
    assert(ModuleStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return ModuleStore;
});
define('MoreButton', [
  'jquery', 'underscore', 'backbone', 'template-store-singleton'
], function ($, _, Backbone, templateStore) {
  'use strict';

  var MoreButton = Backbone.View.extend({

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._fileActions = [];
    },

    render: function () {
      this.$el.html(templateStore.get('moreButton')());
      var $dropdown = this.$el.find('#cp-more-menu'),
        $menu = $dropdown.find('ul');

      // prevent the tooltip from showing when the menu is open
      $dropdown.on({
        'aui-dropdown2-show': function () {
          this.$('button').tipsy('disable');
        }.bind(this),
        'aui-dropdown2-hide': function () {
          this.$('button').tipsy('enable');
        }.bind(this)
      });

      var currentFile = this._fileViewer._fileState.getCurrent();

      this.$('button').tooltip({ gravity: 'n' });
      if (this._fileActions.length) {
        this._fileActions.forEach(function (item) {
          var $item = $(templateStore.get('moreMenuItem')({text: item.text}));
          $item.click(function (e) {
            e.preventDefault();
            item.callback(currentFile);
          });
          $menu.append($item);
        });
        this._show();
      } else {
        this._hide();
      }

      return this;
    },

    addFileAction: function (opts) {
      var match = _.findWhere(this._fileActions, {key: opts.key});

      if (match) {
        // overwrite the properties of the old action with the new ones
        _.extend(match, {
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      } else {
        this._fileActions.push({
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      }

      this.render();
    },

    removeFileAction: function (action) {
      var index = _.indexOf(this._fileActions, action);
      this._fileActions.splice(index, 1);

      this.render();
    },

    _show: function () {
      this.$el.css('display', 'inline');
    },

    _hide: function () {
      this.$el.css('display', 'none');
    }
  });

  return MoreButton;
});

define('panel-container-view', [
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  var PanelContainerView = Backbone.View.extend({

    className: 'panel-view',

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._panelViewsByName = new ConstantsDictionary();
      this._currentPanel = null;
      this._currentPanelName = null;
      this._lastAddedPanelName = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a panel with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasPanelView: function (name) {
      return this._panelViewsByName.isDefined(name);
    },

    /**
     * Adds a View as a panel with a certain, unique name.
     * @param {string} name
     * @param {Backbone.View} PanelView
     * @throws Error if name is already used.
     */
    addPanelView: function (name, PanelView) {
      this._panelViewsByName.define(name, PanelView);
      this._lastAddedPanelName = name;
    },

    /**
     * Checks wether any panel is currently initialized.
     * @return {bool}
     */
    isAnyPanelInitialized: function () {
      return this.$el.is('.expanded');
    },

    /**
     * Checks wether a panel with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isPanelInitialized: function (name) {
      return this._currentPanelName === name;
    },

    /**
     * Initializes the panel with the given name. Then re-renders itself.
     * @param name {String} name of the panel to be initialized. If empty, then use the last added (using addPanelView) panel.
     * @fires initializePanel(panelName)
     * @fires togglePanel(panelName, isInitialized)
     * @throws Error if a panel is already initialized or the panel doesn't exist
     */
    initializePanel: function (name) {
      name = name || this._lastAddedPanelName;
      assert(this.isAnyPanelInitialized() === false, 'no panel is initialized');
      assert(this.hasPanelView(name) === true, 'panel exists');

      var PanelView = this._panelViewsByName.lookup(name);

      this._currentPanelName = name;
      this._currentPanel = new PanelView({
        collection: this.collection,
        fileViewer: this._fileViewer,
        panelView: this
      });

      this.$el.toggleClass('expanded', true);

      this.trigger('initializePanel', this._currentPanelName);
      this.trigger('togglePanel', this._currentPanelName, true);

      this.render();
    },

    /**
     * Tears the initialized panel down and removes it. Then re-renders itself.
     * Won't throw if there's no initialized panel.
     * @fires togglePanel(panelName, isInitialized)
     * @fires teardownPanel(panelName)
     */
    teardownPanel: function () {
      if (this._currentPanel) {
        if (this._currentPanel.teardown) {
          this._currentPanel.teardown();
        }
        this._currentPanel.remove();
      }

      this.$el.toggleClass('expanded', false);

      this.trigger('togglePanel', this._currentPanelName, false);
      this.trigger('teardownPanel', this._currentPanelName);

      this._currentPanelName = null;
      this._currentPanel = null;

      this.render();
    },

    /**
     * Utility method. Recreates the current PanelView (if there is one).
     */
    reinitializePanel: function () {
      if (!this.isAnyPanelInitialized()) { return; }

      var previousPanel = this.getInitializedPanelName();
      this.teardownPanel();
      this.initializePanel(previousPanel);
    },

    /**
     * Returns the name of the instanciated PanelView.
     * @return {string} panelName
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanelName: function () {
      assert(this.isAnyPanelInitialized(), 'a panel is initialized');
      return this._currentPanelName;
    },

    /**
     * Returns the instanciated PanelView.
     * @return {PanelView}
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanel: function () {
      return this._currentPanel;
    },

    /**
     * Renders the initialized panel.
     * Won't throw if no panel is initialized.
     * @fires renderPanel(panelName)
     */
    render: function () {
      this.$el.empty();

      if (this.isAnyPanelInitialized()) {
        this._currentPanel.render();
        this._currentPanel.$el.appendTo(this.$el);
      }
      this.trigger('renderPanel', this._currentPanelName);

      return this;
    }

  });

  return PanelContainerView;
});
define('PasswordLayer', [
  'ajs',
  'backbone',
  'jquery',
  'keyboard',
  'template-store-singleton'
], function (
  AJS,
  Backbone,
  $,
  keyboard,
  templateStore
) {
  'use strict';

  var pdfjsPasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };

  var fullscreenEvents = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange'
  ].join(' ');

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var PasswordLayer = Backbone.View.extend({

    className: 'cp-password-layer',

    events: {
      'keydown .cp-password-input': '_handleKeyDown',
      'click .cp-password-button': '_handleClick',
      'focus .cp-password-input': '_lockNavigation',
      'blur .cp-password-input': '_unlockNavigation'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.$el.hide();
    },

    teardown: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
    },

    /**
     * Show the password input layer
     * @param  {Number}   reason     Reason PDFJS why needs the password
     * @param  {Callback} updatePassword
     */
    showPasswordInput: function (reason, updatePassword) {
      $(document).on(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.updatePassword = updatePassword;
      this._fileViewer._view.fileContentView.getLayerForName('spinner').stopSpin();
      this.$el.show().html(templateStore.get('passwordLayer')({
        prompt: this._getPromptTitle(reason)
      }));
      this.updatePasswordLayer();
      this._showToolbar();
    },

    hidePasswordInput: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.$el.empty();
      this.$el.hide();
    },

    /**
     * Update the passwordLayer depending on fullsccren/no fullscreen
     * Safari/Firefox can't handle keyboard inputs in fullscreen
     */
    updatePasswordLayer: function () {
      if (isFullscreen()) {
        this.$el.find('.cp-password-base').hide();
        this.$el.find('.cp-password-fullscreen').show();
      } else {
        this.$el.find('.cp-password-fullscreen').hide();
        this.$el.find('.cp-password-base').show();
      }
    },

    /**
     * Get i18n string for password prompt based on reason
     * @param  {Number} reason Reason PDFJS why needs the password
     * @return {String}
     */
    _getPromptTitle: function (reason) {
      var title = "Please enter the password to view this file.";
      if (reason === pdfjsPasswordResponses.INCORRECT_PASSWORD) {
        title = "Invalid password. Please try again.";
      }
      return title;
    },

    /**
     * Show passwordLayer and toolbar
     */
    _showToolbar: function () {
      var view  = this._fileViewer._view;
      var toolbar = view.fileContentView.getLayerForName('toolbar');
      var mode  = view._modes[view._mode];
      toolbar.setActions(mode.toolbarActions);
      toolbar.render();
    },

    /**
     * Check if password was given and call `updatePassword()`
     */
    _updatePassword: function () {
      var password = this.$el.find('.cp-password-input').val();
      if (password && password.length > 0) {
        this.hidePasswordInput();
        this.updatePassword(password);
      }
    },

    /**
     * Lock navigation keys
     */
    _lockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount++;
    },

    /**
     * Unlock navigation keys
     */
    _unlockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount--;
    },

    _handleClick: function (ev) {
      ev.preventDefault();
      this._updatePassword();
    },

    _handleKeyDown: function (ev) {
      if (ev.which === keyboard.keys.RETURN) {
        ev.preventDefault();
        return this._updatePassword();
      }
      if (ev.which === keyboard.keys.ESCAPE) {
        ev.preventDefault();
        return this._fileViewer.close();
      }
    }

  });

  return PasswordLayer;
});

define('pdf-view-provider', [
  'jquery',
  'file',
  'module-store-singleton'
], function (
  $,
  File,
  moduleStore
) {
  'use strict';

  var asyncViewerResource = null,
    asyncConfigResource = null;

  /**
   * Returns a pdf viewer.
   * @returns {Promise}
   */
  var pdfViewProvider = function () {
    if (!asyncViewerResource) {
      asyncViewerResource = moduleStore.get('pdf-viewer');
    }
    if (!asyncConfigResource) {
      asyncConfigResource = moduleStore.get('pdf-config');
    }

    var viewerInstance = $.Deferred();

    $.when(asyncViewerResource, asyncConfigResource).done(function (viewer, config) {
      var PDFViewer = require('pdf-view');

      // FIL-1811: Use UMD for loading PDFJS
      var PDFJS = window.PDFJS;
      PDFJS.workerSrc = config.workerSrc;
      PDFJS.cMapUrl = config.cMapUrl;

      viewerInstance.resolve(PDFViewer);
    });

    return viewerInstance.promise();
  };

  return pdfViewProvider;
});

define('presentationMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var requestFullscreen = function () {
    var fullscreenContainer = $('#cp-file-body')[0];

    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen();
    } else if (fullscreenContainer.mozRequestFullScreen) {
      fullscreenContainer.mozRequestFullScreen();
    } else if (fullscreenContainer.webkitRequestFullScreen) {
      fullscreenContainer.webkitRequestFullScreen();
    } else if (fullscreenContainer.msRequestFullscreen) {
      fullscreenContainer.msRequestFullscreen();
    }
  };

  var cancelFullscreen = function () {
    if (document.cancelFullscreen) {
      document.cancelFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var onFullscreenChange = function (e) {
    // if user click Esc to exit fullscreen instead of clicking 'exit presentation' button
    // then change view mode to 'BASE'
    if (!isFullscreen() && !this.isInMode('BASE')) {
      this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
        actionType: 'hotkey'
      });
      this._fileViewer.changeMode('BASE');
    }
  };

  var presentationMode = {

    activateHook: function (mainView) {
      $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      $(document).off('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
    },

    setup: function (mainView, viewer) {
      this._originalScrollTop = $('body').scrollTop();
      $('#cp-file-body').addClass('presentation');
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));

      if (!isFullscreen()) { requestFullscreen(); }
    },

    teardown: function (mainView, viewer, isModeChanged) {
      $('#cp-file-body').removeClass('presentation');
      $(document).off('keydown.modeKeys');

      if (isModeChanged && isFullscreen()) { cancelFullscreen(); }
      // this is to fix an issue on Chrome that
      // when entering and exiting fullscreen mode, the document body got scrolled up
      $('body').scrollTop(this._originalScrollTop);
    },

    disableClickBackgroundCloses: true,

    showsArrowLayer: false,

    _handleKeys: function (e) {
      e.preventDefault();
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }
      if (!viewer) { return; }
      if (e.ctrlKey || e.metaKey) {
        return;
      }

      switch (e.which) {
        case keyboard.keys.ARROW_UP:
          if (viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'hotkey'
            });
            viewer.goToPreviousPage();
            this.updatePaginationButtons();
          }
          return;
        case keyboard.keys.ARROW_DOWN:
          if (viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'hotkey'
            });
            viewer.goToNextPage();
            this.updatePaginationButtons();
          }
          return;
      }

    },

    toolbarActions: [
      {
        title: "Previous page",
        className: 'cp-toolbar-prev-page',
        predicate: function () { return this._viewer && this._viewer.goToPreviousPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'button'
            });
            this._viewer.goToPreviousPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      },
      {
        title: "Exit Presentation",
        className: 'cp-toolbar-presentation-exit',
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
            actionType: 'button'
          });
          this._fileViewer.changeMode('BASE');
        }
      },
      {
        title: "Next page",
        className: 'cp-toolbar-next-page',
        predicate: function () { return this._viewer && this._viewer.goToNextPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'button'
            });
            this._viewer.goToNextPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      }
    ]
  };

  return presentationMode;
});

define('soy-template-backend', [], function () {
  'use strict';

  /* global FileViewer */
  // FileViewer is defined in support/wrapper-plugin-footer.js

  // Returns a value from a nested object, example:
  // obj = { a: { b: { c: 'x' } } }
  // getNestedProperty(obj, 'a.b.c') -> 'x'
  var getNestedProperty = function (obj, prop) {
    var levels = prop.split('.');
    var i;
    for (i = 0; i < levels.length; i++) {
      obj = obj[levels[i]];
    }
    return obj;
  };

  return function (fileViewer) {
    /**
     * Picks the specified template url from the auto-generated template object.
     * @param {string} templateUrl
     * @return {function}
     */
    return function (templateUrl) {
      return getNestedProperty(FileViewer.Templates, templateUrl);
    };
  };
});

define('SpinnerLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  // Spinner rendering
  var SPINNER_SIZE = 'large';
  var SPINNER_STYLE = {
    color: '#fff',
    zIndex: 'auto'
  };

  /**
   * Loading spinner in the middle of the file content.
   * @constructor
   */
  var SpinnerLayer = Backbone.View.extend({

    className: 'cp-spinner-layer',

    initialize: function () {
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodySpinner')());
      this._updateElements();
      return this;
    },

    /**
     * Instruct the spinner to start.
     */
    startSpin: function () {
      this.$spinner.spin(SPINNER_SIZE, SPINNER_STYLE);
    },

    /**
     * Instruct the spinner to stop.
     */
    stopSpin: function () {
      this.$spinner.spin(false);
    },

    _updateElements: function () {
      this.$spinner = this.$el.find('.cp-spinner');
    }

  });

  return SpinnerLayer;
});
define('storage', ['assert'], function (assert) {
  'use strict';

  /**
   * Universal key-value store using localStorage or
   * optionally a `customStorage` object can be passed in.
   * @constructor
   * @param {Object} customStorage - Object with setItem, getItem, removeItem methods.
   * @param {Function} customStorage.setItem - Custom set method
   * @param {Function} customStorage.getItem - Custom get method
   * @param {Function} customStorage.removeItem - Custom remove method
   * @param {String} namespace - Namespace to prefix storage keys with
   */
  var Storage = function (customStorage, namespace) {
    this._namespace = namespace || '';
    this._storage = this._getStorage(customStorage);
  };

  /**
   * Return corresponding value to given key.
   * - can store arbitrary json structs for certain values
   *   (not any value, functions won't work for example)
   * - for better performance, try to have more keys and less structs
   *   (cause big structs are slow)
   * @param  {String} key
   * @return {*}
   */
  Storage.prototype.getItem = function (key) {
    var storageValue;
    key = this._namespace + key.toString();
    storageValue = new StorageValue();
    storageValue.fromJSON(this._storage.getItem(key));
    if (storageValue.isExpired()) {
      this._storage.removeItem(key);
      return;
    }
    return storageValue.value;
  };

  /**
   * Store given value for with given key.
   * @param {String} key
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  Storage.prototype.setItem = function (key, value, expiry) {
    key = this._namespace + key.toString();
    this._storage.setItem(
      key,
      new StorageValue(value, expiry).toJSON()
    );
  };

  /**
   * Remove storage entry for key.
   * @param {String} key
   */
  Storage.prototype.removeItem = function (key) {
    key = this._namespace + key.toString();
    this._storage.removeItem(key);
  };

  // Check if window.localStorage is available.
  Storage.prototype._hasLocalStorage = function () {
    var test = this._namespace + 'hasLocalStorage';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Return the proper storage object.
  Storage.prototype._getStorage = function (customStorage) {
    if (customStorage) {
      assert(
      typeof customStorage.setItem === 'function',
      'Storage custom.setItem is a function'
      );
      assert(
      typeof customStorage.getItem === 'function',
      'Storage custom.getItem is a function'
      );
      assert(
      typeof customStorage.removeItem === 'function',
      'Storage custom.removeItem is a function'
      );
      return customStorage;
    } else if (this._hasLocalStorage()) {
      return Storage.localStorage;
    }
    return Storage.noStorage;
  };

  Storage.noStorage = {
    setItem: function () {},
    getItem: function () {},
    removeItem: function () {}
  };

  Storage.localStorage = {
    setItem: function (key, value) {
      window.localStorage.setItem(key, value);
    },

    getItem: function (key) {
      return window.localStorage.getItem(key);
    },

    removeItem: function (key) {
      window.localStorage.removeItem(key);
    }
  };

  /**
   * StorageValue
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  var StorageValue = Storage.StorageValue = function (value, expiry) {
    this.value  = value;
    this._setExpiry(expiry);
  };

  StorageValue.prototype._setExpiry = function (expiry) {
    if (parseInt(expiry)) {
      this.expiry = Date.now() + expiry;
    } else {
      this.expiry = null;
    }
  };

  /**
   * Checks if the expiry time is in the past
   * @return {Boolean}
   */
  StorageValue.prototype.isExpired = function () {
    return this.expiry && Date.now() > this.expiry;
  };

  /**
   * Sets StorageValue properties from a JSON string.
   * @param  {String} stringifiedJson
   */
  StorageValue.prototype.fromJSON = function (stringifiedJson) {
    var json;
    stringifiedJson = stringifiedJson || '{}';
    json = JSON.parse(stringifiedJson);
    this.value = json.value;
    this.expiry = json.expiry;
  };

  /**
   * Return JSON string
   * @return {String}
   */
  StorageValue.prototype.toJSON = function () {
    return JSON.stringify({
      value: this.value,
      expiry: this.expiry || undefined
    });
  };

  return Storage;
});

define('template-store-singleton', [
  'template-store'
], function (
  TemplateStore
) {
  'use strict';

  /**
   * Global template store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new TemplateStore();
});
define('template-store', [
  'assert',
  'underscore'
], function (
  assert,
  _
) {
  'use strict';

  /**
   * Provides templates by asking a previously configured backend.
   *
   * A backend is a function that accepts a template path and returns the
   * matched template. If no template is found, it returns undefined.
   *
   * @constructor
   */
  var TemplateStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  TemplateStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given templateUrl.
   * @param {string} templateUrl
   * @return {*}
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.get = function (templateUrl) {
    assert(TemplateStore.validBackend(this._backend), 'backend is valid');
    return this._backend(templateUrl);
  };

  /**
   * Sets a backend for this template store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.useBackend = function (backend) {
    assert(TemplateStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return TemplateStore;
});
define('TitleView', [
  'backbone', 'icon-utils', 'template-store-singleton'
], function (Backbone, iconUtils, templateStore) {
  'use strict';

  var TitleView = Backbone.View.extend({

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      var model = this._fileViewer.getCurrentFile();
      if (!model) { return; }

      this.$el.html(templateStore.get('titleContainer')({
        title: model.get('title'),
        iconClass: iconUtils.getCssClass(model.get('type'))
      }));

      return this;
    }

  });

  return TitleView;
});
define('ToolbarLayer', [
  'jquery',
  'underscore',
  'backbone',
  'template-store-singleton',
  'keyboard'
], function (
  $,
  _,
  Backbone,
  templateStore,
  keyboard
) {
  'use strict';

  // Amount of time to wait before hiding the controls when the mouse stops moving (in ms).
  var HIDE_CONTROLS_TIMEOUT = 500;

  // Amount of time between checking if the mouse is still moving (in ms).
  // Should be smaller than HIDE_CONTROLS_TIMEOUT to prevent flickering (in ms).
  var THROTTLE_MOUSEMOVE = HIDE_CONTROLS_TIMEOUT - 100;

  // Toolbar animation durations (in ms).
  var HIDE_ANIMATION_DURATION = 400;
  var SHOW_ANIMATION_DURATION = 100;

  /**
   * Showing a toolbar in the lower part of the viewer.
   * @constructor
   */
  var ToolbarLayer = Backbone.View.extend({

    className: 'cp-toolbar-layer',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._viewer = null;
      this._toggleControlsTimeout = null;
      this._actions = [];

      $('#cp-file-body').on('mousemove.toolbarLayer', this._showControlsOnMove.bind(this));
      $(document).on('keydown.tabToNavigate', this._tabToNavigate.bind(this));
    },

    teardown: function () {
      $(document).off('keydown.tabToNavigate');
      $('#cp-file-body').off('mousemove.toolbarLayer');
    },

    render: function () {
      this.$el.html(templateStore.get('toolbar')({
        actions: this._actions
      }));
      this.$el.find('button').tooltip({gravity: 's', aria: true});
      this.$toolbar = this.$('.cp-toolbar');

      var listeners = {};
      this._actions.forEach(function (action) {
        listeners['click .' + action.className] = action.handler;

        if (action.predicate && !action.predicate.call(this)) {
          this.$toolbar.find('.' + action.className).hide();
        }
      }, this);
      this.delegateEvents(listeners);

      this.$toolbar.css('margin-left', -this.$toolbar.width() / 2);

      this.$toolbar.on('click', 'a[href=\'#\']', function (e) {
        e.preventDefault();
      });

      return this;
    },

    setActions: function (actions) {
      this._actions = actions;
      this.render();
    },

    getActions: function () {
      return this._actions;
    },

    setViewer: function (viewer) {
      this._viewer = viewer;
      this.render();
    },

    _tabToNavigate: function (event) {
      if (event.which === keyboard.keys.TAB) {
        this._showControlsOnMove.call(this);
      }
    },

    // Show / hide controls based on mouse movements:
    // - Show the controls when the mouse is moving over the content view.
    // - Hide the controls after a short delay when the mouse stops moving.
    // - Keep the controls open if the mouse is hovering over them.

    _showControlsOnMove : _.throttle(function () {
      if (!this.$toolbar) { return; }

      this.$toolbar.fadeTo(SHOW_ANIMATION_DURATION, 1);
      clearTimeout(this._toggleControlsTimeout);
      this._toggleControlsTimeout = this._setHideTimer();

    }, THROTTLE_MOUSEMOVE),

    _setHideTimer: function () {
      return setTimeout(function () {
        if (this.$toolbar.is(':hover')) { return; }
        if (this.$toolbar.has(':focus').length) { return; }

        this.$toolbar.find('button').each(this._removeTooltipForElement);

        this.$toolbar.fadeTo(HIDE_ANIMATION_DURATION, 0);
      }.bind(this), HIDE_CONTROLS_TIMEOUT);
    },

    _removeTooltipForElement: function (pos, el) {
      var tipsyId = $(el).attr('aria-describedby');
      if (tipsyId) { $('#' + tipsyId).fadeOut(); }
    }

  });

  return ToolbarLayer;
});

define('unknown-file-type-view-provider', [
  'jquery',
  'unknown-file-type-view'
],
function (
  $,
  UnknownFileTypeView
) {
  'use strict';

  var unknownFileTypeViewProvider = function () {
    return $.Deferred().resolve(UnknownFileTypeView);
  };

  return unknownFileTypeViewProvider;
});
define('unknown-file-type-view', [
  'ajs',
  'BaseViewer',
  'template-store-singleton',
  'icon-utils',
  'jquery'
],
function (
  AJS,
  BaseViewer,
  templateStore,
  iconUtils,
  $
) {
  'use strict';

  var UnknownFileTypeView = BaseViewer.extend({

    id: 'cp-unknown-file-type-view-wrapper',

    events: {
      'click .download-button': '_handleDownloadButton'
    },

    initialize: function () {
      BaseViewer.prototype.initialize.apply(this, arguments);
    },

    teardown: function () {
      this.off();
      this.remove();
    },

    render: function () {
      this.$el.html(templateStore.get('unknownFileTypeViewer')({
        iconClass: iconUtils.getCssClass(this.model.get('type')),
        src: this.model.get('srcDownload') || this.model.get('src')
      }));

      var fileView = this._fileViewer.getView();

      // kill sidebar view.
      if (fileView.fileSidebarView.isAnyPanelInitialized()) {
        fileView.fileSidebarView.teardownPanel();
      }

      this.trigger('viewerReady');

      return this;
    },

    setupMode: function (mode) {
      if (mode === 'BASE') {
        $('.cp-toolbar-layer').hide();
      }
    },

    _handleDownloadButton: function () {
      this._fileViewer.trigger('fv.download');
      this._triggerAnalytics();
    },

    _triggerAnalytics: function () {
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'cta'
      });
    }

  });

  return UnknownFileTypeView;
});

define('url', [], function () {
  'use strict';
  return {
    /**
     * Adds an objects keys and values as query parameters to an given URL.
     * @param {string} [url]
     * @param {object} [param]
     * @return {string}
     */
    addQueryParamToUrl: function (url, param) {
      param = param || {};
      url = url.split('?');
      var queryArray = url[1] && url[1].split('&');
      queryArray = queryArray || [];
      Object.keys(param).forEach(function (key, val) {
        queryArray.push(key + '=' + param[key]);
      });
      if (queryArray.length === 0) {
        return url[0];
      }
      return url[0] + '?' + queryArray.join('&');
    },
    parseQueryString: function (query) {
      var parts = query.split('&');
      var params = {};
      for (var i = 0, ii = parts.length; i < ii; ++i) {
        var param = parts[i].split('=');
        var key = param[0].toLowerCase();
        var value = param.length > 1 ? param[1] : null;
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
      return params;
    }
  };
});

define('video-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var videoViewProvider = function () {
    return $.Deferred().resolve(require('video-view'));
  };

  return videoViewProvider;
});
define('viewer-registry',
  [
    'underscore',
    'assert'
  ],
  function (
    _,
    assert
  ) {
    'use strict';

    var createMatchFn = function (expected) {
      return function (current) {
        return current === expected;
      };
    };

    /**
     * ViewerRegistry is responsible for mapping file types to content viewers.
     *
     * When FileViewer is asked to view a file, it uses the file's type and asks
     * its ViewerRegistry for the proper viewer. In addition, ViewerRegistry is
     * exposed to the outside world. Therefore viewers and plugins can register
     * themself without touching FileViwer core.
     *
     * A viewer is a backbone view and is registered via a function that wraps this
     * view into a promise.
     *
     * Multiple viewers for the same filetype are weighted and can thus be overriden.
     * The default weight is 10 with a lower weight meaning higher priority.
     */
    var ViewerRegistry = function () {
      this._handlers = [];
    };

    /**
     * Checks for a valid viewer (is a function).
     *
     * @param {*} previewer
     * @return {boolean}
     */
    ViewerRegistry.isValidPreviewer = function (previewer) {
      return _.isFunction(previewer);
    };

    /**
     * Checks for a valid weight (a number).
     *
     * @param {*} weight
     * @return {boolean}
     */
    ViewerRegistry.isValidWeight = function (weight) {
      return typeof weight === 'number' && !isNaN(weight);
    };

    /**
     * Register a new viewer for a given filetype with an optional weight.
     *
     * fileType can either be a string which is then directly matched or a
     * predicate function that get's handed the current file type and then
     * can return true / false.
     *
     * @param {string|function} fileType
     * @param {function} previewer
     * @param {integer} [weight=10]
     * @thors {Error}
     */
    ViewerRegistry.prototype.register = function (fileType, previewer, weight) {
      var matchesFileType = typeof fileType === 'function' ? fileType : createMatchFn(fileType);

      weight = weight || 10;

      assert(ViewerRegistry.isValidPreviewer(previewer), 'previewer is valid');
      assert(ViewerRegistry.isValidWeight(weight), 'weight is valid');

      this._handlers.push({
        matchesFileType: matchesFileType,
        previewer: previewer,
        weight: weight
      });

      this._updateWeighting();
    };

    /**
     * Get the viewer with the lowest weight for the given fileType.
     *
     * Returns undefined if no viewer is found.
     *
     * @param {string} fileType
     * @return {object} previewer
     */
    ViewerRegistry.prototype.get = function (fileType) {
      var handler = _.find(this._handlers, function (handler) {
        return handler.matchesFileType(fileType);
      });

      return handler && handler.previewer;
    };

    ViewerRegistry.prototype._updateWeighting = function () {
      // Sorts handlers by weight - needs to be called after a new handler is inserted.
      this._handlers = _.sortBy(this._handlers, function (handler) {
        return handler.weight;
      });
    };

    return ViewerRegistry;
  }
);

define('ViewerLayer', [
  'backbone'
], function (Backbone) {
  'use strict';

  var ViewerLayer = Backbone.View.extend({

    className: 'cp-viewer-layer',

    initialize: function (options) {
      this._viewer = null;
    },

    attachViewer: function (viewer) {
      this._viewer = viewer;
      this.$el.prepend(viewer.$el);
    },

    getAttachedViewer: function () {
      return this._viewer;
    },

    teardown: function () {
      if (this._viewer) {
        if (this._viewer.teardown) {
          this._viewer.teardown();
        }
        this._viewer.$el.remove();
      }
    }
  });

  return ViewerLayer;
});

define('WaitingLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var WaitingLayer = Backbone.View.extend({

    className: 'cp-waiting-layer',

    initialize: function () {
      this.$el.hide();
    },

    showMessage: function (file, header, message) {
      this.$el.show().html(templateStore.get('waitingMessage')({
        src: file.get('srcDownload') || file.get('src'),
        header: header,
        message: message
      }));
      this.$el.find('.cp-waiting-message-spinner').spin('large', {
        color: '#fff',
        zIndex: 'auto'
      });
    },

    clearMessage: function () {
      this.$el.find('.cp-waiting-message-spinner').spin(false);
      this.$el.hide();
    }

  });

  return WaitingLayer;
});

    // assemble core module by injecting all dependencies
    var FileViewer = require('file-viewer');

    FileViewer.Templates = window.FileViewer.Templates;

    // export FileViewer using CommonJS, AMD and the window object
    if (typeof module !== "undefined" && module.exports) {
        module.exports = FileViewer;
    }

    if (window.define) {
        window.define(
            'FileViewer',
            ['jquery', 'underscore', 'backbone', 'ajs'],
            function () { return FileViewer; }
        );
    }

    window.FileViewer = FileViewer;

}());;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-image-templates.js' */
// This file was automatically generated from image-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.previewBody = function(opt_data, opt_ignored) {
  return '<div class="cp-scale-info" /><div class="cp-image-container" /><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.previewBody.soyTemplateName = 'FileViewer.Templates.previewBody';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-image.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('image-view',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'file',
    'BaseViewer',
    'template-store-singleton'
  ], function (
    AJS,
    Backbone,
    _,
    $,
    File,
    BaseViewer,
    templateStore
  ) {
    'use strict';

    var ImageView = BaseViewer.extend({

      id: 'cp-image-preview',

      tagName: 'div',

      initialize: function () {
        BaseViewer.prototype.initialize.apply(this, arguments);
        this.bindPanEvents();
        this.PIXELATE_THRESHOLD = 2;
        this.MIN_HEIGHT = 100;
        this.ZOOM_IN_FACTOR = 1.25;
        this.ZOOM_OUT_FACTOR = 0.80;
        this._isFitWidth = false;
        this._isFitHeight = false;
      },

      renderAnnotations: function (PinsView) {
        var current = this._fileViewer.getCurrentFile();
        var annotations = current.get('annotations');
        if (current && PinsView) {
          this.pinsView = new PinsView({
            fileViewer: this._fileViewer,
            container: this.$el.find('.cp-image-container'),
            collection: annotations
          });
          this.pinsView.render();
        }

        annotations.on('selected', function (item) {
          var $pin, positionTop, positionLeft;
          if (!item) { return; }

          $pin = this.$el.find('span.cp-active-annotation.selected');
          if (!$pin.length) { return; }

          positionTop = $pin.position().top - (this.$el.height() / 2);
          positionLeft = $pin.position().left - (this.$el.width() / 2);

          this.$el.animate({
            'scrollTop': positionTop,
            'scrollLeft': positionLeft
          });

        }.bind(this));
      },

      bindPanEvents: function () {
        var previous = {x: 0, y: 0},
          view = this;

        var scroll = function (e) {
          var $el = view.$el;
          $el.scrollLeft($el.scrollLeft() + previous.x - e.clientX);
          $el.scrollTop($el.scrollTop() + previous.y - e.clientY);
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        var unpan = function (e) {
          view.$el.off('mousemove', '#cp-img', scroll);
          view.$image.removeClass('panning');
          e.preventDefault();
        };

        var pan = function (e) {
          $(window).one('mouseup', unpan);
          view.$el.on('mousemove', '#cp-img', scroll);
          view.$image.addClass('panning');
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        this.$el.on('mousedown', '#cp-img', pan);
      },

      handleResize: function () {
        this._forceRescale();
      },

      _forceRescale: function () {
        if (this._isFitHeight) {
          this.zoomHeight();
        } else if (this._isFitWidth) {
          this.zoomWidth();
        }
      },

      // Set size of the images container to the image size.
      // This is a workaround for `HC-11712 as` it's
      // original fix `e31eac8ac51` caused a new issue: `FIL-555`.
      _fixContainerSize: function () {
        var $container = this.$el.find('.cp-image-container');
        var $image = this.$el.find('#cp-img');
        $container.width($image.width());
        $container.height($image.height());
      },

      // Returns `true` if the original image is either wider
      // or higher than current viewport.
      _isImageBiggerThanViewport: function () {
        return this._isImageWiderThanViewport() ||
             this._isImageHigherThanViewport();
      },

      // Returns `true` if original image is wider than current viewport.
      _isImageWiderThanViewport: function () {
        var viewportWidth = this.$el.width();
        return this.imageWidth > viewportWidth;
      },

      // Returns `true` if original image is higher than current viewport.
      _isImageHigherThanViewport: function () {
        var viewportHeight = this.$el.height();
        return this.imageHeight > viewportHeight;
      },

      _isZoomedToPageFit: function () {
        return this.$el.width() === this.$image.width() ||
             this.$el.height() === this.$image.height();
      },

      _stopFit: function () {
        this._isFitWidth  = false;
        this._isFitHeight = false;
      },

      _showScaleInfo: function (scale) {
        if (this._rescaleForFullScreen) { return; }
        var scalePercentage = Math.round(parseInt(scale * 100, 10));
        var $scaleInfo = this.$el.find('.cp-scale-info');
        $scaleInfo.text(scalePercentage + '%');
        $scaleInfo
          .stop(true, true)
          .fadeIn(50)
          .delay(400)
          .fadeOut(100);
      },

      /**
       * Scale the image up by factor set in `this.ZOOM_IN_FACTOR`
       */
      zoomIn: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_IN_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * Scale the image down by factor set in `this.ZOOM_OUT_FACTOR`
       */
      zoomOut: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_OUT_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * If the image is already fit to viewports width then rescale to
       * best fit or else scale to width.
       */
      zoomFit: function () {
        if (this._isZoomedToPageFit()) {
          this.zoomActual();
        } else {
          this.zoomAuto(true);
        }
      },

      /**
       * Scale image to fit into the viewport but don't resize the image
       * over its original dimensions.
       * @param  {Boolean} force - Force best fit even if image is smaller than viewport
       */
      zoomAuto: function (force) {
        if (this._isImageBiggerThanViewport() || force) {
          this._zoomPageFit();
        } else {
          this.zoomActual();
        }
      },

      _zoomPageFit: function () {
        var viewportWidth  = this.$el.width();
        var viewportHeight = this.$el.height();

        if ((viewportWidth / this.imageWidth) > (viewportHeight / this.imageHeight)) {
          this.zoomHeight();
        } else {
          this.zoomWidth();
        }
      },

      /**
       * Scale the image so it fits to the viewports width.
       */
      zoomWidth: function () {
        var viewportWidth = this.$el.width();
        var scaleFactor   = viewportWidth / this.imageWidth;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitWidth = true;
      },

      /**
       * Scale the image so it fits to the viewports height.
       */
      zoomHeight: function () {
        var viewportHeight = this.$el.height();
        var scaleFactor = viewportHeight / this.imageHeight;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitHeight = true;
      },

      /**
       * Scale the image to its original size.
       */
      zoomActual: function () {
        this._stopFit();
        this.changeScale(1);
      },

      /**
       * Change the images scale and re-center it in viewport.
       * @param  {Number} scale - Factor by which to scale the image
       */
      changeScale: function (scale) {
        var viewportWidth = this.$el.width();
        var viewportHeight = this.$el.height();

        var oldWidth = this.$image.width();
        var oldHeight = this.$image.height();
        var containerPosition = this.$el.find('.cp-image-container').position();

        //find the position of the pixel in the centre of the viewport
        var oldPixelCentreWidth = (viewportWidth/2) + Math.abs(containerPosition.left);
        var oldPixelCentreHeight = (viewportHeight/2) + Math.abs(containerPosition.top);

        this.$image.css('width', this.imageWidth * scale);
        this.$image.css('height', this.imageHeight * scale);

        //calculate the new pixel centre after the image has been scaled
        var newPixelCentreWidth = (oldPixelCentreWidth/oldWidth) * this.$image.width();
        var newPixelCentreHeight = (oldPixelCentreHeight/oldHeight) * this.$image.height();

        //move the scrollbar to the new pixel and then center the viewport on it
        this.$el.scrollLeft(newPixelCentreWidth - (viewportWidth/2));
        this.$el.scrollTop(newPixelCentreHeight - (viewportHeight/2));

        this.makePannable();
        this.pixelateIfScaleOverThreshold(scale);
        this._fixContainerSize();
        this._showScaleInfo(scale);
      },

      pixelateIfScaleOverThreshold: function (scale) {
        this.$image.toggleClass(
          'pixelate',
          scale >= this.PIXELATE_THRESHOLD
        );
      },

      makePannable: function () {
        if ((this.$el.width() < this.$image.width()) || (this.$el.height() < this.$image.height())) {
          this.$image.addClass('pannable');
        } else {
          this.$image.removeClass('pannable');
        }
      },

      teardown: function () {
        BaseViewer.prototype.teardown.apply(this);
        $(window).off('resize.cp-repaint');
        this.pinsView && this.pinsView.remove().off();
      },

      getBackground: function () {
        return this.$el.add('.cp-image-container');
      },

      render: function () {
        this.$el.html(templateStore.get('previewBody')());

        this.addImage();

        $(window).on('resize.cp-repaint', _.throttle(this._forceRescale.bind(this), 250));

        return this;
      },

      addImage: function () {
        // This extra work makes the image size the same as the viewport size.
        var $img = $('<img/>')
          .attr('id', 'cp-img')
          .attr('src', this._previewSrc)
          .attr('alt', this.model.get('title'));
        $img.off('load');

        $img.on('load', _.partial(this.scaleAndAppendImage, this));
        $img.on('load', function () {
          this.trigger('viewerReady');
        }.bind(this));
        $img.on('error', function () {
          var err = new Error('Image failed loading');
          err.title = "Ouch! We can\'t load the image.";
          err.description = this.model.get('src');
          err.icon = 'cp-image-icon';
          this.trigger('viewerFail', err);
        }.bind(this));

        $img.on('click', function () {
          document.activeElement.blur();
        });
      },

      scaleAndAppendImage: function (view) {
        var $image = $(this);

        view.imageHeight = this.height;
        view.imageWidth = this.width;
        view.$image = $image;

        $image.css('display', 'none'); // For the fade in.

        var $imageContainer = view.$el.find('.cp-image-container');
        $imageContainer.append(view.$image);
        $imageContainer.addClass('cp-annotatable');

        // Ensure the whole image is displayed by fitting to the larger side.
        view.zoomAuto();
        view.$image.fadeIn(200);

        view.trigger('cp.imageAppended');
      },

      setupMode: function (mode, isModeChanged) {
        if (isModeChanged) {
          clearInterval(this._fullScreenInProgress);
          this.scaleGraduallyToFit();
        }
      },

      scaleGraduallyToFit: function () {
        // When browser change to fullscreen mode, the screen size is changed many times.
        // Here we scale 10 times every 100ms to make the page scaling to full screen smoothly
        var times = 0;
        this._rescaleForFullScreen = true;
        this._fullScreenInProgress = setInterval(function () {
          times++;
          if (times === 11) {
            clearInterval(this._fullScreenInProgress);
            this._rescaleForFullScreen = false;
            this.zoomAuto();
          }
          this.zoomAuto();
        }.bind(this), 100);
      }

    });

    return ImageView;
  });

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/video.js/dist/cdn/video.js' */
/*! Video.js v4.12.15 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function n(a){return function(){return this[a]}}function p(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");
function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ca[a])return c&&t.log.warn('Player "'+a+'" is already initialised. Options will not be applied.'),d&&t.Ca[a].I(d),t.Ca[a];a=t.m(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}var videojs=window.videojs=t;t.fc="4.12";t.sd="https:"==document.location.protocol?"https://":"http://";t.VERSION="4.12.15";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},loadingSpinner:{},textTrackDisplay:{},bigPlayButton:{},controlBar:{},errorDisplay:{},textTrackSettings:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.Ef||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.fc&&(videojs.options.flash.swf=t.sd+"vjs.zencdn.net/"+t.fc+"/video-js.swf");t.Gd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.Z.Aa(t.options.languages[a],c):c;return t.options.languages};t.Ca={};"function"===typeof define&&define.amd?define("videojs",[],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.Ga=t.CoreObject=m();
t.Ga.extend=function(a){var c,d;a=a||{};c=a.init||a.l||this.prototype.init||this.prototype.l||m();d=function(){c.apply(this,arguments)};d.prototype=t.i.create(this.prototype);d.prototype.constructor=d;d.extend=t.Ga.extend;d.create=t.Ga.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.Ga.create=function(){var a=t.i.create(this.prototype);this.apply(a,arguments);return a};
t.b=function(a,c,d){if(t.i.isArray(c))return v(t.b,a,c,d);var e=t.getData(a);e.G||(e.G={});e.G[c]||(e.G[c]=[]);d.s||(d.s=t.s++);e.G[c].push(d);e.ba||(e.disabled=l,e.ba=function(c){if(!e.disabled){c=t.Nb(c);var d=e.G[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.Nc();k++)d[k].call(a,c)}});1==e.G[c].length&&(a.addEventListener?a.addEventListener(c,e.ba,l):a.attachEvent&&a.attachEvent("on"+c,e.ba))};
t.n=function(a,c,d){if(t.Ic(a)){var e=t.getData(a);if(e.G){if(t.i.isArray(c))return v(t.n,a,c,d);if(c){var g=e.G[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.G[c]=[];t.xc(a,c)}}else for(g in e.G)c=g,e.G[c]=[],t.xc(a,c)}}};t.xc=function(a,c){var d=t.getData(a);0===d.G[c].length&&(delete d.G[c],a.removeEventListener?a.removeEventListener(c,d.ba,l):a.detachEvent&&a.detachEvent("on"+c,d.ba));t.hb(d.G)&&(delete d.G,delete d.ba,delete d.disabled);t.hb(d)&&t.Zc(a)};
t.Nb=function(a){function c(){return f}function d(){return l}if(!a||!a.Sb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.ee=c;a.defaultPrevented=f};a.ee=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Sb=c};a.Sb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.Nc=c;a.stopPropagation()};a.Nc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.o=function(a,c){var d=t.Ic(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.Nb(c);d.ba&&d.ba.call(a,c);if(e&&!c.Sb()&&c.bubbles!==l)t.o(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.N=function(a,c,d){function e(){t.n(a,c,e);d.apply(this,arguments)}if(t.i.isArray(c))return v(t.N,a,c,d);e.s=d.s=d.s||t.s++;t.b(a,c,e)};function v(a,c,d,e){t.tc.forEach(d,function(d){a(c,d,e)})}var w=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.i.ca(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.va=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.i={};
t.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.i.ca=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};t.i.D=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};t.i.Od=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.i.Od(e,g):c[d]);return a};t.i.copy=function(a){return t.i.D({},a)};
t.i.ib=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.i.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.ge=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=t.s++);e.s=d?d+"_"+c.s:c.s;return e};t.ua={};t.s=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.s++);t.ua[c]||(t.ua[c]={});return t.ua[c]};
t.Ic=function(a){a=a[t.expando];return!(!a||t.hb(t.ua[a]))};t.Zc=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=j}}};t.hb=function(a){for(var c in a)if(a[c]!==j)return l;return f};t.Pa=function(a,c){return-1!==(" "+a.className+" ").indexOf(" "+c+" ")};t.p=function(a,c){t.Pa(a,c)||(a.className=""===a.className?c:a.className+" "+c)};
t.r=function(a,c){var d,e;if(t.Pa(a,c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");var x=document.createElement("track");x.Tb="captions";x.ed="en";x.label="English";t.A.appendChild(x);t.P=navigator.userAgent;t.zd=/iPhone/i.test(t.P);t.yd=/iPad/i.test(t.P);t.Ad=/iPod/i.test(t.P);t.xd=t.zd||t.yd||t.Ad;var aa=t,y;var z=t.P.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;aa.ff=y;t.wd=/Android/i.test(t.P);var ba=t,B;
var C=t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),D,E;C?(D=C[1]&&parseFloat(C[1]),E=C[2]&&parseFloat(C[2]),B=D&&E?parseFloat(C[1]+"."+C[2]):D?D:j):B=j;ba.ec=B;t.Bd=t.wd&&/webkit/i.test(t.P)&&2.3>t.ec;t.gc=/Firefox/i.test(t.P);t.gf=/Chrome/i.test(t.P);t.pa=/MSIE\s8\.0/.test(t.P);t.Db=!!("ontouchstart"in window||window.ud&&document instanceof window.ud);t.td="backgroundSize"in t.A.style;
t.ad=function(a,c){t.i.ca(c,function(c,e){e===j||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};t.Oa=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
t.rf=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Rb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.bb={};t.m=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.Na=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.Id=function(){document.body.focus();document.onselectstart=p(l)};t.Xe=function(){document.onselectstart=p(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.xa=function(a,c){return a===b&&c===b?{length:0,start:function(){throw Error("This TimeRanges object is empty");},end:function(){throw Error("This TimeRanges object is empty");}}:{length:1,start:function(){return a},end:function(){return c}}};t.Ie=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};
t.Xd=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Ae=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,""));"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,""));e&&document.body.removeChild(c);return a};
function F(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){F(j,arguments)};t.log.history=[];t.log.error=function(){F("error",arguments)};t.log.warn=function(){F("warn",arguments)};
t.Vd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.tc={};t.tc.forEach=function(a,c,d){if(t.i.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};
t.bf=function(a,c){var d,e,g,h,k,q,r;"string"===typeof a&&(a={uri:a});videojs.Z.Aa({method:"GET",timeout:45E3},a);c=c||m();q=function(){window.clearTimeout(k);c(j,e,e.response||e.responseText)};r=function(a){window.clearTimeout(k);if(!a||"string"===typeof a)a=Error(a);c(a,e)};d=window.XMLHttpRequest;"undefined"===typeof d&&(d=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
});e=new d;e.uri=a.uri;d=t.Ae(a.uri);g=window.location;d.protocol+d.host!==g.protocol+g.host&&window.XDomainRequest&&!("withCredentials"in e)?(e=new window.XDomainRequest,e.onload=q,e.onerror=r,e.onprogress=m(),e.ontimeout=m()):(h="file:"==d.protocol||"file:"==g.protocol,e.onreadystatechange=function(){if(4===e.readyState){if(e.Ue)return r("timeout");200===e.status||h&&0===e.status?q():r()}},a.timeout&&(k=window.setTimeout(function(){4!==e.readyState&&(e.Ue=f,e.abort())},a.timeout)));try{e.open(a.method||
"GET",a.uri,f)}catch(u){r(u);return}a.withCredentials&&(e.withCredentials=f);a.responseType&&(e.responseType=a.responseType);try{e.send()}catch(A){r(A)}};t.Z={};t.Z.Aa=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.Z.Aa(e,g):c[d]);return a};t.z=m();s=t.z.prototype;s.ab={};s.b=function(a,c){var d=this.addEventListener;this.addEventListener=Function.prototype;t.b(this,a,c);this.addEventListener=d};s.addEventListener=t.z.prototype.b;
s.n=function(a,c){t.n(this,a,c)};s.removeEventListener=t.z.prototype.n;s.N=function(a,c){t.N(this,a,c)};s.o=function(a){var c=a.type||a;"string"===typeof a&&(a={type:c});a=t.Nb(a);if(this.ab[c]&&this["on"+c])this["on"+c](a);t.o(this,a)};s.dispatchEvent=t.z.prototype.o;
t.a=t.Ga.extend({l:function(a,c,d){this.d=a;this.q=t.i.copy(this.q);c=this.options(c);this.Qa=c.id||c.el&&c.el.id;this.Qa||(this.Qa=(a.id&&a.id()||"no_player")+"_component_"+t.s++);this.pe=c.name||j;this.c=c.el||this.e();this.R=[];this.cb={};this.eb={};this.Kc();this.I(d);if(c.$c!==l){var e,g;this.k().reportUserActivity&&(e=t.bind(this.k(),this.k().reportUserActivity),this.b("touchstart",function(){e();this.clearInterval(g);g=this.setInterval(e,250)}),a=function(){e();this.clearInterval(g)},this.b("touchmove",
e),this.b("touchend",a),this.b("touchcancel",a))}}});s=t.a.prototype;s.dispose=function(){this.o({type:"dispose",bubbles:l});if(this.R)for(var a=this.R.length-1;0<=a;a--)this.R[a].dispose&&this.R[a].dispose();this.eb=this.cb=this.R=j;this.n();this.c.parentNode&&this.c.parentNode.removeChild(this.c);t.Zc(this.c);this.c=j};s.d=f;s.k=n("d");s.options=function(a){return a===b?this.q:this.q=t.Z.Aa(this.q,a)};s.e=function(a,c){return t.e(a,c)};
s.v=function(a){var c=this.d.language(),d=this.d.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.m=n("c");s.wa=function(){return this.B||this.c};s.id=n("Qa");s.name=n("pe");s.children=n("R");s.Yd=function(a){return this.cb[a]};s.da=function(a){return this.eb[a]};
s.aa=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.va(e),c.name=e,d=new window.videojs[d](this.d||this,c)):d=a;this.R.push(d);"function"===typeof d.id&&(this.cb[d.id()]=d);(e=e||d.name&&d.name())&&(this.eb[e]=d);"function"===typeof d.el&&d.el()&&this.wa().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.da(a));if(a&&this.R){for(var c=l,d=this.R.length-1;0<=d;d--)if(this.R[d]===a){c=f;this.R.splice(d,1);break}c&&(this.cb[a.id()]=j,this.eb[a.name()]=j,(c=a.m())&&c.parentNode===this.wa()&&this.wa().removeChild(a.m()))}};
s.Kc=function(){var a,c,d,e,g,h;a=this;c=a.options();if(d=c.children)if(h=function(d,e){c[d]!==b&&(e=c[d]);e!==l&&(a[d]=a.aa(d,e))},t.i.isArray(d))for(var k=0;k<d.length;k++)e=d[k],"string"==typeof e?(g=e,e={}):g=e.name,h(g,e);else t.i.ca(d,h)};s.T=p("");
s.b=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.b(this.c,a,t.bind(this,c)):(e=t.bind(this,d),h=this,g=function(){h.n(a,c,e)},g.s=e.s,this.b("dispose",g),d=function(){h.n("dispose",g)},d.s=e.s,a.nodeName?(t.b(a,c,e),t.b(a,"dispose",d)):"function"===typeof a.b&&(a.b(c,e),a.b("dispose",d)));return this};
s.n=function(a,c,d){!a||"string"===typeof a||t.i.isArray(a)?t.n(this.c,a,c):(d=t.bind(this,d),this.n("dispose",d),a.nodeName?(t.n(a,c,d),t.n(a,"dispose",d)):(a.n(c,d),a.n("dispose",d)));return this};s.N=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.N(this.c,a,t.bind(this,c)):(e=t.bind(this,d),g=this,h=function(){g.n(a,c,h);e.apply(this,arguments)},h.s=e.s,this.b(a,c,h));return this};s.o=function(a){t.o(this.c,a);return this};
s.I=function(a){a&&(this.ya?a.call(this):(this.mb===b&&(this.mb=[]),this.mb.push(a)));return this};s.Va=function(){this.ya=f;var a=this.mb;this.mb=[];if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.o("ready")}};s.Pa=function(a){return t.Pa(this.c,a)};s.p=function(a){t.p(this.c,a);return this};s.r=function(a){t.r(this.c,a);return this};s.show=function(){this.r("vjs-hidden");return this};s.W=function(){this.p("vjs-hidden");return this};function G(a){a.r("vjs-lock-showing")}
s.width=function(a,c){return ca(this,"width",a,c)};s.height=function(a,c){return ca(this,"height",a,c)};s.Qd=function(a,c){return this.width(a,f).height(c)};function ca(a,c,d,e){if(d!==b){if(d===j||t.ge(d))d=0;a.c.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.o("resize");return a}if(!a.c)return 0;d=a.c.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.c["offset"+t.va(c)],10)}
function da(a){var c,d,e,g,h,k,q,r;c=0;d=j;a.b("touchstart",function(a){1===a.touches.length&&(d=t.i.copy(a.touches[0]),c=(new Date).getTime(),g=f)});a.b("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,q=a.touches[0].pageY-d.pageY,r=Math.sqrt(k*k+q*q),10<r&&(g=l))});h=function(){g=l};a.b("touchleave",h);a.b("touchcancel",h);a.b("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,200>e&&(a.preventDefault(),this.o("tap")))})}
s.setTimeout=function(a,c){function d(){this.clearTimeout(e)}a=t.bind(this,a);var e=setTimeout(a,c);d.s="vjs-timeout-"+e;this.b("dispose",d);return e};s.clearTimeout=function(a){function c(){}clearTimeout(a);c.s="vjs-timeout-"+a;this.n("dispose",c);return a};s.setInterval=function(a,c){function d(){this.clearInterval(e)}a=t.bind(this,a);var e=setInterval(a,c);d.s="vjs-interval-"+e;this.b("dispose",d);return e};
s.clearInterval=function(a){function c(){}clearInterval(a);c.s="vjs-interval-"+a;this.n("dispose",c);return a};t.w=t.a.extend({l:function(a,c){t.a.call(this,a,c);da(this);this.b("tap",this.u);this.b("click",this.u);this.b("focus",this.kb);this.b("blur",this.jb)}});s=t.w.prototype;
s.e=function(a,c){var d;c=t.i.D({className:this.T(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.B=t.e("div",{className:"vjs-control-content"}),this.Ib=t.e("span",{className:"vjs-control-text",innerHTML:this.v(this.ta)||"Need Text"}),this.B.appendChild(this.Ib),d.appendChild(this.B));return d};s.T=function(){return"vjs-control "+t.a.prototype.T.call(this)};s.u=m();s.kb=function(){t.b(document,"keydown",t.bind(this,this.ka))};
s.ka=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.u()};s.jb=function(){t.n(document,"keydown",t.bind(this,this.ka))};t.S=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.Hd=this.da(this.q.barName);this.handle=this.da(this.q.handleName);this.b("mousedown",this.lb);this.b("touchstart",this.lb);this.b("focus",this.kb);this.b("blur",this.jb);this.b("click",this.u);this.b(a,"controlsvisible",this.update);this.b(a,this.Uc,this.update)}});s=t.S.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.i.D({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.lb=function(a){a.preventDefault();t.Id();this.p("vjs-sliding");this.b(document,"mousemove",this.la);this.b(document,"mouseup",this.Ba);this.b(document,"touchmove",this.la);this.b(document,"touchend",this.Ba);this.la(a)};s.la=m();
s.Ba=function(){t.Xe();this.r("vjs-sliding");this.n(document,"mousemove",this.la);this.n(document,"mouseup",this.Ba);this.n(document,"touchmove",this.la);this.n(document,"touchend",this.Ba);this.update()};s.update=function(){if(this.c){var a,c=this.Qb(),d=this.handle,e=this.Hd;if("number"!==typeof c||c!==c||0>c||Infinity===c)c=0;a=c;if(d){a=this.c.offsetWidth;var g=d.m().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.m().style.left=t.round(100*c,2)+"%"}e&&(e.m().style.width=t.round(100*a,2)+"%")}};
function ea(a,c){var d,e,g,h;d=a.c;e=t.Vd(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.m().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.m().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.kb=function(){this.b(document,"keydown",this.ka)};
s.ka=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.fd();else if(38==a.which||39==a.which)a.preventDefault(),this.gd()};s.jb=function(){this.n(document,"keydown",this.ka)};s.u=function(a){a.stopImmediatePropagation();a.preventDefault()};t.ga=t.a.extend();t.ga.prototype.defaultValue=0;t.ga.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.i.D({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};
t.qa=t.a.extend();function fa(a,c){a.aa(c);c.b("click",t.bind(a,function(){G(this)}))}t.qa.prototype.e=function(){var a=this.options().zc||"ul";this.B=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.B,className:"vjs-menu"});a.appendChild(this.B);t.b(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.M=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.selected(c.selected)}});
t.M.prototype.e=function(a,c){return t.w.prototype.e.call(this,"li",t.i.D({className:"vjs-menu-item",innerHTML:this.v(this.q.label)},c))};t.M.prototype.u=function(){this.selected(f)};t.M.prototype.selected=function(a){a?(this.p("vjs-selected"),this.c.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.c.setAttribute("aria-selected",l))};
t.O=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();this.b("keydown",this.ka);this.c.setAttribute("aria-haspopup",f);this.c.setAttribute("role","button")}});s=t.O.prototype;s.update=function(){var a=this.La();this.za&&this.removeChild(this.za);this.za=a;this.aa(a);this.H&&0===this.H.length?this.W():this.H&&1<this.H.length&&this.show()};s.Ja=l;
s.La=function(){var a=new t.qa(this.d);this.options().title&&a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.options().title),Se:-1}));if(this.H=this.createItems())for(var c=0;c<this.H.length;c++)fa(a,this.H[c]);return a};s.Ka=m();s.T=function(){return this.className+" vjs-menu-button "+t.w.prototype.T.call(this)};s.kb=m();s.jb=m();s.u=function(){this.N("mouseout",t.bind(this,function(){G(this.za);this.c.blur()}));this.Ja?H(this):ga(this)};
s.ka=function(a){32==a.which||13==a.which?(this.Ja?H(this):ga(this),a.preventDefault()):27==a.which&&(this.Ja&&H(this),a.preventDefault())};function ga(a){a.Ja=f;a.za.p("vjs-lock-showing");a.c.setAttribute("aria-pressed",f);a.H&&0<a.H.length&&a.H[0].m().focus()}function H(a){a.Ja=l;G(a.za);a.c.setAttribute("aria-pressed",l)}t.J=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.i.D(this,a);this.message||(this.message=t.J.Pd[this.code]||"")};
t.J.prototype.code=0;t.J.prototype.message="";t.J.prototype.status=j;t.J.gb="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.J.Pd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var I=0;I<t.J.gb.length;I++)t.J[t.J.gb[I]]=I,t.J.prototype[t.J.gb[I]]=I;
var J,ha,K,L;
J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
ha=J[0];for(L=0;L<J.length;L++)if(J[L][1]in document){K=J[L];break}if(K){t.bb.Pb={};for(L=0;L<K.length;L++)t.bb.Pb[ha[L]]=K[L]}
t.Player=t.a.extend({l:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+t.s++;this.Te=a&&t.Oa(a);c=t.i.D(ia(a),c);this.Pc=c.language||t.options.language;this.je=c.languages||t.options.languages;this.K={};this.Vc=c.poster||"";this.Jb=!!c.controls;a.controls=l;c.$c=l;ja(this,"audio"===this.L.nodeName.toLowerCase());t.a.call(this,this,c,d);this.controls()?this.p("vjs-controls-enabled"):this.p("vjs-controls-disabled");ja(this)&&this.p("vjs-audio");t.Ca[this.Qa]=this;c.plugins&&t.i.ca(c.plugins,function(a,
c){this[a](c)},this);var e,g,h,k,q;e=t.bind(this,this.reportUserActivity);this.b("mousedown",function(){e();this.clearInterval(g);g=this.setInterval(e,250)});this.b("mousemove",function(a){if(a.screenX!=k||a.screenY!=q)k=a.screenX,q=a.screenY,e()});this.b("mouseup",function(){e();this.clearInterval(g)});this.b("keydown",e);this.b("keyup",e);this.setInterval(function(){if(this.Fa){this.Fa=l;this.userActive(f);this.clearTimeout(h);var a=this.options().inactivityTimeout;0<a&&(h=this.setTimeout(function(){this.Fa||
this.userActive(l)},a))}},250)}});s=t.Player.prototype;s.language=function(a){if(a===b)return this.Pc;this.Pc=a;return this};s.languages=n("je");s.q=t.options;s.dispose=function(){this.o("dispose");this.n("dispose");t.Ca[this.Qa]=j;this.L&&this.L.player&&(this.L.player=j);this.c&&this.c.player&&(this.c.player=j);this.h&&this.h.dispose();t.a.prototype.dispose.call(this)};
function ia(a){var c,d,e={sources:[],tracks:[]};c=t.Oa(a);d=c["data-setup"];d!==j&&t.i.D(c,t.JSON.parse(d||"{}"));t.i.D(e,c);if(a.hasChildNodes()){var g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)c=a[g],d=c.nodeName.toLowerCase(),"source"===d?e.sources.push(t.Oa(c)):"track"===d&&e.tracks.push(t.Oa(c))}return e}
s.e=function(){var a=this.c=t.a.prototype.e.call(this,"div"),c=this.L,d;c.removeAttribute("width");c.removeAttribute("height");d=t.Oa(c);t.i.ca(d,function(c){"class"==c?a.className=d[c]:a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.q.width,f);this.height(this.q.height,f);c.ce=c.networkState;c.parentNode&&c.parentNode.insertBefore(a,c);t.Rb(c,a);this.c=a;this.b("loadstart",this.te);this.b("waiting",this.ze);this.b(["canplay",
"canplaythrough","playing","ended"],this.ye);this.b("seeking",this.we);this.b("seeked",this.ve);this.b("ended",this.qe);this.b("play",this.Xb);this.b("firstplay",this.re);this.b("pause",this.Wb);this.b("progress",this.ue);this.b("durationchange",this.Sc);this.b("fullscreenchange",this.se);return a};
function ka(a,c,d){a.h&&(a.ya=l,a.h.dispose(),a.h=l);"Html5"!==c&&a.L&&(t.f.Kb(a.L),a.L=j);a.Ta=c;a.ya=l;var e=t.i.D({source:d,parentEl:a.c},a.q[c.toLowerCase()]);d&&(a.Cc=d.type,d.src==a.K.src&&0<a.K.currentTime&&(e.startTime=a.K.currentTime),a.K.src=d.src);a.h=new window.videojs[c](a,e);a.h.I(function(){this.d.Va()})}s.te=function(){this.r("vjs-ended");this.error(j);this.paused()?la(this,l):this.o("firstplay")};s.Jc=l;
function la(a,c){c!==b&&a.Jc!==c&&((a.Jc=c)?(a.p("vjs-has-started"),a.o("firstplay")):a.r("vjs-has-started"))}s.Xb=function(){this.r("vjs-ended");this.r("vjs-paused");this.p("vjs-playing");la(this,f)};s.ze=function(){this.p("vjs-waiting")};s.ye=function(){this.r("vjs-waiting")};s.we=function(){this.p("vjs-seeking")};s.ve=function(){this.r("vjs-seeking")};s.re=function(){this.q.starttime&&this.currentTime(this.q.starttime);this.p("vjs-has-started")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused")};
s.ue=function(){1==this.bufferedPercent()&&this.o("loadedalldata")};s.qe=function(){this.p("vjs-ended");this.q.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.Sc=function(){var a=M(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.p("vjs-live"):this.r("vjs-live"))};s.se=function(){this.isFullscreen()?this.p("vjs-fullscreen"):this.r("vjs-fullscreen")};
function N(a,c,d){if(a.h&&!a.h.ya)a.h.I(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw t.log(e),e;}}function M(a,c){if(a.h&&a.h.ya)try{return a.h[c]()}catch(d){throw a.h[c]===b?t.log("Video.js: "+c+" method not defined for "+a.Ta+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.Ta+" playback technology element.",d),a.h.ya=l):t.log(d),d;}}s.play=function(){N(this,"play");return this};s.pause=function(){N(this,"pause");return this};
s.paused=function(){return M(this,"paused")===l?l:f};s.currentTime=function(a){return a!==b?(N(this,"setCurrentTime",a),this):this.K.currentTime=M(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.K.duration=parseFloat(a),this;this.K.duration===b&&this.Sc();return this.K.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=M(this,"buffered");if(!a||!a.length)a=t.xa(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.K.volume=a,N(this,"setVolume",a),t.Ie(a),this;a=parseFloat(M(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(N(this,"setMuted",a),this):M(this,"muted")||l};s.Sa=function(){return M(this,"supportsFullScreen")||l};s.Mc=l;
s.isFullscreen=function(a){return a!==b?(this.Mc=!!a,this):this.Mc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
s.requestFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(f);a?(t.b(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.n(document,a.fullscreenchange,arguments.callee);this.o("fullscreenchange")})),this.c[a.requestFullscreen]()):this.h.Sa()?N(this,"enterFullScreen"):(this.Fc(),this.o("fullscreenchange"));return this};
s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.h.Sa()?N(this,"exitFullScreen"):(this.Lb(),this.o("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
s.Fc=function(){this.fe=f;this.Rd=document.documentElement.style.overflow;t.b(document,"keydown",t.bind(this,this.Gc));document.documentElement.style.overflow="hidden";t.p(document.body,"vjs-full-window");this.o("enterFullWindow")};s.Gc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Lb())};s.Lb=function(){this.fe=l;t.n(document,"keydown",this.Gc);document.documentElement.style.overflow=this.Rd;t.r(document.body,"vjs-full-window");this.o("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,k=a;h<k.length;h++){var q=k[h];if(g.canPlaySource(q))return{source:q,h:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return M(this,"src");t.i.isArray(a)?ma(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.Ta].canPlaySource(a)?ma(this,[a]):(this.K.src=a.src,this.Cc=a.type||"",this.I(function(){window.videojs[this.Ta].prototype.hasOwnProperty("setSource")?N(this,"setSource",a):N(this,"src",a.src);"auto"==this.q.preload&&this.load();this.q.autoplay&&this.play()})));return this};
function ma(a,c){var d=a.selectSource(c);d?d.h===a.Ta?a.src(d.source):ka(a,d.h,d.source):(a.setTimeout(function(){this.error({code:4,message:this.v(this.options().notSupportedMessage)})},0),a.Va())}s.load=function(){N(this,"load");return this};s.currentSrc=function(){return M(this,"currentSrc")||this.K.src||""};s.Nd=function(){return this.Cc||""};s.Ra=function(a){return a!==b?(N(this,"setPreload",a),this.q.preload=a,this):M(this,"preload")};
s.autoplay=function(a){return a!==b?(N(this,"setAutoplay",a),this.q.autoplay=a,this):M(this,"autoplay")};s.loop=function(a){return a!==b?(N(this,"setLoop",a),this.q.loop=a,this):M(this,"loop")};s.poster=function(a){if(a===b)return this.Vc;a||(a="");this.Vc=a;N(this,"setPoster",a);this.o("posterchange");return this};
s.controls=function(a){return a!==b?(a=!!a,this.Jb!==a&&((this.Jb=a)?(this.r("vjs-controls-disabled"),this.p("vjs-controls-enabled"),this.o("controlsenabled")):(this.r("vjs-controls-enabled"),this.p("vjs-controls-disabled"),this.o("controlsdisabled"))),this):this.Jb};t.Player.prototype.bc;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.bc!==a&&((this.bc=a)?(this.p("vjs-using-native-controls"),this.o("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.o("usingcustomcontrols"))),this):this.bc};s.ja=j;s.error=function(a){if(a===b)return this.ja;if(a===j)return this.ja=a,this.r("vjs-error"),this;this.ja=a instanceof t.J?a:new t.J(a);this.o("error");this.p("vjs-error");t.log.error("(CODE:"+this.ja.code+" "+t.J.gb[this.ja.code]+")",this.ja.message,this.ja);return this};
s.ended=function(){return M(this,"ended")};s.seeking=function(){return M(this,"seeking")};s.seekable=function(){return M(this,"seekable")};s.Fa=f;s.reportUserActivity=function(){this.Fa=f};s.ac=f;
s.userActive=function(a){return a!==b?(a=!!a,a!==this.ac&&((this.ac=a)?(this.Fa=f,this.r("vjs-user-inactive"),this.p("vjs-user-active"),this.o("useractive")):(this.Fa=l,this.h&&this.h.N("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.p("vjs-user-inactive"),this.o("userinactive"))),this):this.ac};s.playbackRate=function(a){return a!==b?(N(this,"setPlaybackRate",a),this):this.h&&this.h.featuresPlaybackRate?M(this,"playbackRate"):1};s.Lc=l;
function ja(a,c){return c!==b?(a.Lc=!!c,a):a.Lc}s.networkState=function(){return M(this,"networkState")};s.readyState=function(){return M(this,"readyState")};s.textTracks=function(){return this.h&&this.h.textTracks()};s.X=function(){return this.h&&this.h.remoteTextTracks()};s.addTextTrack=function(a,c,d){return this.h&&this.h.addTextTrack(a,c,d)};s.ha=function(a){return this.h&&this.h.addRemoteTextTrack(a)};s.Da=function(a){this.h&&this.h.removeRemoteTextTrack(a)};t.tb=t.a.extend();
t.tb.prototype.q={sf:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{},subtitlesButton:{},captionsButton:{},chaptersButton:{}}};t.tb.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};t.hc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.hc.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.B=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.v("Stream Type")+"</span>"+this.v("LIVE"),"aria-live":"off"});a.appendChild(this.B);return a};t.kc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"play",this.Xb);this.b(a,"pause",this.Wb)}});s=t.kc.prototype;s.ta="Play";s.T=function(){return"vjs-play-control "+t.w.prototype.T.call(this)};
s.u=function(){this.d.paused()?this.d.play():this.d.pause()};s.Xb=function(){this.r("vjs-paused");this.p("vjs-playing");this.c.children[0].children[0].innerHTML=this.v("Pause")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused");this.c.children[0].children[0].innerHTML=this.v("Play")};t.ub=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.ub.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.B);return a};t.ub.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.B.innerHTML='<span class="vjs-control-text">'+this.v("Current Time")+"</span> "+t.Na(a,this.d.duration())};
t.vb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa);this.b(a,"loadedmetadata",this.fa)}});t.vb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.v("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.B);return a};
t.vb.prototype.fa=function(){var a=this.d.duration();a&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Duration Time")+"</span> "+t.Na(a))};t.qc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.qc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.Cb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.Cb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.B);return a};t.Cb.prototype.fa=function(){this.d.duration()&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -"+t.Na(this.d.remainingTime()))};
t.Ya=t.w.extend({l:function(a,c){t.w.call(this,a,c)}});t.Ya.prototype.ta="Fullscreen";t.Ya.prototype.T=function(){return"vjs-fullscreen-control "+t.w.prototype.T.call(this)};t.Ya.prototype.u=function(){this.d.isFullscreen()?(this.d.exitFullscreen(),this.Ib.innerHTML=this.v("Fullscreen")):(this.d.requestFullscreen(),this.Ib.innerHTML=this.v("Non-Fullscreen"))};t.Bb=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.Bb.prototype.q={children:{seekBar:{}}};
t.Bb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.nc=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"timeupdate",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.nc.prototype;s.q={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Uc="timeupdate";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.Ea=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.setAttribute("aria-valuenow",t.round(100*this.Qb(),2));this.c.setAttribute("aria-valuetext",t.Na(a,this.d.duration()))};s.Qb=function(){return this.d.currentTime()/this.d.duration()};s.lb=function(a){t.S.prototype.lb.call(this,a);this.d.nb=f;this.d.p("vjs-scrubbing");this.$e=!this.d.paused();this.d.pause()};s.la=function(a){a=ea(this,a)*this.d.duration();a==this.d.duration()&&(a-=0.1);this.d.currentTime(a)};
s.Ba=function(a){t.S.prototype.Ba.call(this,a);this.d.nb=l;this.d.r("vjs-scrubbing");this.$e&&this.d.play()};s.gd=function(){this.d.currentTime(this.d.currentTime()+5)};s.fd=function(){this.d.currentTime(this.d.currentTime()-5)};t.yb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"progress",this.update)}});t.yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Loaded")+"</span>: 0%</span>"})};
t.yb.prototype.update=function(){var a,c,d,e,g=this.d.buffered();a=this.d.duration();var h,k=this.d;h=k.buffered();k=k.duration();h=h.end(h.length-1);h>k&&(h=k);k=this.c.children;this.c.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=k[a])||(e=this.c.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=k.length;a>g.length;a--)this.c.removeChild(k[a-1])};t.jc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.jc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Progress")+"</span>: 0%</span>"})};t.Za=t.ga.extend({l:function(a,c){t.ga.call(this,a,c);this.b(a,"timeupdate",this.fa)}});t.Za.prototype.defaultValue="00:00";t.Za.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.Za.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.innerHTML='<span class="vjs-control-text">'+t.Na(a,this.d.duration())+"</span>"};t.Fb=t.a.extend({l:function(a,c){t.a.call(this,a,c);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.Fb.prototype.q={children:{volumeBar:{}}};
t.Fb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.Eb=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"volumechange",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.Eb.prototype;s.Ea=function(){this.c.setAttribute("aria-valuenow",t.round(100*this.d.volume(),2));this.c.setAttribute("aria-valuetext",t.round(100*this.d.volume(),2)+"%")};s.q={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Uc="volumechange";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.la=function(a){this.d.muted()&&this.d.muted(l);this.d.volume(ea(this,a))};s.Qb=function(){return this.d.muted()?0:this.d.volume()};s.gd=function(){this.d.volume(this.d.volume()+0.1)};s.fd=function(){this.d.volume(this.d.volume()-0.1)};t.rc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.rc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.Gb=t.ga.extend();t.Gb.prototype.defaultValue="00:00";t.Gb.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ra=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"volumechange",this.update);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.ra.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};
t.ra.prototype.u=function(){this.d.muted(this.d.muted()?l:f)};t.ra.prototype.update=function(){var a=this.d.volume(),c=3;0===a||this.d.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.d.muted()?this.c.children[0].children[0].innerHTML!=this.v("Unmute")&&(this.c.children[0].children[0].innerHTML=this.v("Unmute")):this.c.children[0].children[0].innerHTML!=this.v("Mute")&&(this.c.children[0].children[0].innerHTML=this.v("Mute"));for(a=0;4>a;a++)t.r(this.c,"vjs-vol-"+a);t.p(this.c,"vjs-vol-"+c)};
t.Ha=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.b(a,"volumechange",this.af);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")});this.p("vjs-menu-button")}});t.Ha.prototype.La=function(){var a=new t.qa(this.d,{zc:"div"}),c=new t.Eb(this.d,this.q.volumeBar);c.b("focus",function(){a.p("vjs-lock-showing")});c.b("blur",function(){G(a)});a.aa(c);return a};
t.Ha.prototype.u=function(){t.ra.prototype.u.call(this);t.O.prototype.u.call(this)};t.Ha.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};t.Ha.prototype.af=t.ra.prototype.update;t.lc=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.pd();this.od();this.b(a,"loadstart",this.pd);this.b(a,"ratechange",this.od)}});s=t.lc.prototype;s.ta="Playback Rate";
s.className="vjs-playback-rate";s.e=function(){var a=t.O.prototype.e.call(this);this.Oc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.Oc);return a};s.La=function(){var a=new t.qa(this.k()),c=this.k().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.aa(new t.Ab(this.k(),{rate:c[d]+"x"}));return a};s.Ea=function(){this.m().setAttribute("aria-valuenow",this.k().playbackRate())};
s.u=function(){for(var a=this.k().playbackRate(),c=this.k().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.k().playbackRate(d)};function na(a){return a.k().h&&a.k().h.featuresPlaybackRate&&a.k().options().playbackRates&&0<a.k().options().playbackRates.length}s.pd=function(){na(this)?this.r("vjs-hidden"):this.p("vjs-hidden")};s.od=function(){na(this)&&(this.Oc.innerHTML=this.k().playbackRate()+"x")};
t.Ab=t.M.extend({zc:"button",l:function(a,c){var d=this.label=c.rate,e=this.Wc=parseFloat(d,10);c.label=d;c.selected=1===e;t.M.call(this,a,c);this.b(a,"ratechange",this.update)}});t.Ab.prototype.u=function(){t.M.prototype.u.call(this);this.k().playbackRate(this.Wc)};t.Ab.prototype.update=function(){this.selected(this.k().playbackRate()==this.Wc)};t.mc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();a.b("posterchange",t.bind(this,this.update))}});s=t.mc.prototype;
s.dispose=function(){this.k().n("posterchange",this.update);t.w.prototype.dispose.call(this)};s.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});t.td||(this.Mb=t.e("img"),a.appendChild(this.Mb));return a};s.update=function(){var a=this.k().poster();this.na(a);a?this.show():this.W()};s.na=function(a){var c;this.Mb?this.Mb.src=a:(c="",a&&(c='url("'+a+'")'),this.c.style.backgroundImage=c)};s.u=function(){this.d.play()};t.ic=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.ic.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.rb=t.w.extend();t.rb.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.rb.prototype.u=function(){this.d.play()};t.wb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.update();this.b(a,"error",this.update)}});
t.wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.B=t.e("div");a.appendChild(this.B);return a};t.wb.prototype.update=function(){this.k().error()&&(this.B.innerHTML=this.v(this.k().error().message))};var O;t.j=t.a.extend({l:function(a,c,d){c=c||{};c.$c=l;t.a.call(this,a,c,d);this.featuresProgressEvents||this.ne();this.featuresTimeupdateEvents||this.oe();this.be();this.featuresNativeTextTracks||this.Sd();this.de()}});s=t.j.prototype;
s.be=function(){var a,c;a=this.k();c=function(){a.controls()&&!a.usingNativeControls()&&this.Fd()};this.I(c);this.b(a,"controlsenabled",c);this.b(a,"controlsdisabled",this.De);this.I(function(){this.networkState&&0<this.networkState()&&this.k().o("loadstart")})};
s.Fd=function(){var a;this.b("mousedown",this.u);this.b("touchstart",function(){a=this.d.userActive()});this.b("touchmove",function(){a&&this.k().reportUserActivity()});this.b("touchend",function(a){a.preventDefault()});da(this);this.b("tap",this.xe)};s.De=function(){this.n("tap");this.n("touchstart");this.n("touchmove");this.n("touchleave");this.n("touchcancel");this.n("touchend");this.n("click");this.n("mousedown")};
s.u=function(a){0===a.button&&this.k().controls()&&(this.k().paused()?this.k().play():this.k().pause())};s.xe=function(){this.k().userActive(!this.k().userActive())};s.ne=function(){this.Qc=f;this.We()};s.me=function(){this.Qc=l;this.hd()};s.We=function(){this.Ce=this.setInterval(function(){var a=this.k().bufferedPercent();this.Jd!=a&&this.k().o("progress");this.Jd=a;1===a&&this.hd()},500)};s.hd=function(){this.clearInterval(this.Ce)};
s.oe=function(){var a=this.d;this.Vb=f;this.b(a,"play",this.md);this.b(a,"pause",this.qb);this.N("timeupdate",function(){this.featuresTimeupdateEvents=f;this.Rc()})};s.Rc=function(){var a=this.d;this.Vb=l;this.qb();this.n(a,"play",this.md);this.n(a,"pause",this.qb)};s.md=function(){this.Bc&&this.qb();this.Bc=this.setInterval(function(){this.k().o("timeupdate")},250)};s.qb=function(){this.clearInterval(this.Bc);this.k().o("timeupdate")};s.dispose=function(){this.Qc&&this.me();this.Vb&&this.Rc();t.a.prototype.dispose.call(this)};
s.Zb=function(){this.Vb&&this.k().o("timeupdate")};s.de=function(){function a(){var a=c.da("textTrackDisplay");a&&a.C()}var c=this.d,d;if(d=this.textTracks())d.addEventListener("removetrack",a),d.addEventListener("addtrack",a),this.b("dispose",t.bind(this,function(){d.removeEventListener("removetrack",a);d.removeEventListener("addtrack",a)}))};
s.Sd=function(){var a=this.d,c,d,e;window.WebVTT||(e=document.createElement("script"),e.src=a.options()["vtt.js"]||"../node_modules/vtt.js/dist/vtt.js",a.m().appendChild(e),window.WebVTT=f);if(d=this.textTracks())c=function(){var c,d,e;e=a.da("textTrackDisplay");e.C();for(c=0;c<this.length;c++)d=this[c],d.removeEventListener("cuechange",t.bind(e,e.C)),"showing"===d.mode&&d.addEventListener("cuechange",t.bind(e,e.C))},d.addEventListener("change",c),this.b("dispose",t.bind(this,function(){d.removeEventListener("change",
c)}))};s.textTracks=function(){this.d.ld=this.d.ld||new t.F;return this.d.ld};s.X=function(){this.d.Xc=this.d.Xc||new t.F;return this.d.Xc};O=function(a,c,d,e,g){var h=a.textTracks();g=g||{};g.kind=c;d&&(g.label=d);e&&(g.language=e);g.player=a.d;a=new t.t(g);P(h,a);return a};t.j.prototype.addTextTrack=function(a,c,d){if(!a)throw Error("TextTrack kind is required but was not provided");return O(this,a,c,d)};t.j.prototype.ha=function(a){a=O(this,a.kind,a.label,a.language,a);P(this.X(),a);return{Y:a}};
t.j.prototype.Da=function(a){Q(this.textTracks(),a);Q(this.X(),a)};t.j.prototype.bd=m();t.j.prototype.featuresVolumeControl=f;t.j.prototype.featuresFullscreenResize=l;t.j.prototype.featuresPlaybackRate=l;t.j.prototype.featuresProgressEvents=l;t.j.prototype.featuresTimeupdateEvents=l;t.j.prototype.featuresNativeTextTracks=l;
t.j.dc=function(a){a.registerSourceHandler=function(c,d){var e=a.cd;e||(e=a.cd=[]);d===b&&(d=e.length);e.splice(d,0,c)};a.ob=function(c){for(var d=a.cd||[],e,g=0;g<d.length;g++)if(e=d[g].canHandleSource(c))return d[g];return j};a.wc=function(c){var d=a.ob(c);return d?d.canHandleSource(c):""};a.prototype.ma=function(c){var d=a.ob(c);d||(a.nativeSourceHandler?d=a.nativeSourceHandler:t.log.error("No source hander found for the current source."));this.ia();this.n("dispose",this.ia);this.fb=c;this.$b=
d.handleSource(c,this);this.b("dispose",this.ia);return this};a.prototype.ia=function(){this.$b&&this.$b.dispose&&this.$b.dispose()}};t.media={};
t.f=t.j.extend({l:function(a,c,d){var e,g,h;if(c.nativeCaptions===l||c.nativeTextTracks===l)this.featuresNativeTextTracks=l;t.j.call(this,a,c,d);for(d=t.f.xb.length-1;0<=d;d--)this.b(t.f.xb[d],this.Td);(c=c.source)&&(this.c.currentSrc!==c.src||a.L&&3===a.L.ce)&&this.ma(c);if(this.c.hasChildNodes()){d=this.c.childNodes;e=d.length;for(c=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&(this.featuresNativeTextTracks?P(this.X(),g.track):c.push(g));for(d=0;d<c.length;d++)this.c.removeChild(c[d])}if(t.Db&&
a.options().nativeControlsForTouch===f){var k,q,r,u;k=this;q=this.k();c=q.controls();k.c.controls=!!c;r=function(){k.c.controls=f};u=function(){k.c.controls=l};q.b("controlsenabled",r);q.b("controlsdisabled",u);c=function(){q.n("controlsenabled",r);q.n("controlsdisabled",u)};k.b("dispose",c);q.b("usingcustomcontrols",c);q.usingNativeControls(f)}a.I(function(){this.src()&&(this.L&&this.q.autoplay&&this.paused())&&(delete this.L.poster,this.play())});this.Va()}});s=t.f.prototype;
s.dispose=function(){t.f.Kb(this.c);t.j.prototype.dispose.call(this)};
s.e=function(){var a=this.d,c,d,e,g=a.L;if(!g||this.movingMediaElementInDOM===l){g?(e=g.cloneNode(l),t.f.Kb(g),g=e,a.L=j):(g=t.e("video"),e=videojs.Z.Aa({},a.Te),(!t.Db||a.options().nativeControlsForTouch!==f)&&delete e.controls,t.ad(g,t.i.D(e,{id:a.id()+"_html5_api","class":"vjs-tech"})));g.player=a;if(a.q.nd)for(e=0;e<a.q.nd.length;e++)c=a.q.nd[e],d=document.createElement("track"),d.Tb=c.Tb,d.label=c.label,d.ed=c.ed,d.src=c.src,"default"in c&&d.setAttribute("default","default"),g.appendChild(d);
t.Rb(g,a.m())}c=["autoplay","preload","loop","muted"];for(e=c.length-1;0<=e;e--){d=c[e];var h={};"undefined"!==typeof a.q[d]&&(h[d]=a.q[d]);t.ad(g,h)}return g};s.Td=function(a){"error"==a.type&&this.error()?this.k().error(this.error().code):(a.bubbles=l,this.k().o(a))};s.play=function(){this.c.play()};s.pause=function(){this.c.pause()};s.paused=function(){return this.c.paused};s.currentTime=function(){return this.c.currentTime};s.Zb=function(a){try{this.c.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};
s.duration=function(){return this.c.duration||0};s.buffered=function(){return this.c.buffered};s.volume=function(){return this.c.volume};s.Oe=function(a){this.c.volume=a};s.muted=function(){return this.c.muted};s.Ke=function(a){this.c.muted=a};s.width=function(){return this.c.offsetWidth};s.height=function(){return this.c.offsetHeight};s.Sa=function(){return"function"==typeof this.c.webkitEnterFullScreen&&(/Android/.test(t.P)||!/Chrome|Mac OS X 10.5/.test(t.P))?f:l};
s.Ec=function(){var a=this.c;"webkitDisplayingFullscreen"in a&&this.N("webkitbeginfullscreen",function(){this.d.isFullscreen(f);this.N("webkitendfullscreen",function(){this.d.isFullscreen(l);this.d.o("fullscreenchange")});this.d.o("fullscreenchange")});a.paused&&a.networkState<=a.ef?(this.c.play(),this.setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.Ud=function(){this.c.webkitExitFullScreen()};
function oa(a,c){var d=/^blob\:/i;return c&&a&&d.test(a)?c:a}s.src=function(a){var c=this.c.src;if(a===b)return oa(c,this.dd);this.na(a)};s.na=function(a){this.c.src=a};s.load=function(){this.c.load()};s.currentSrc=function(){var a=this.c.currentSrc;return!this.fb?a:oa(a,this.fb.src)};s.poster=function(){return this.c.poster};s.bd=function(a){this.c.poster=a};s.Ra=function(){return this.c.Ra};s.Me=function(a){this.c.Ra=a};s.autoplay=function(){return this.c.autoplay};
s.He=function(a){this.c.autoplay=a};s.controls=function(){return this.c.controls};s.loop=function(){return this.c.loop};s.Je=function(a){this.c.loop=a};s.error=function(){return this.c.error};s.seeking=function(){return this.c.seeking};s.seekable=function(){return this.c.seekable};s.ended=function(){return this.c.ended};s.playbackRate=function(){return this.c.playbackRate};s.Le=function(a){this.c.playbackRate=a};s.networkState=function(){return this.c.networkState};s.readyState=function(){return this.c.readyState};
s.textTracks=function(){return!this.featuresNativeTextTracks?t.j.prototype.textTracks.call(this):this.c.textTracks};s.addTextTrack=function(a,c,d){return!this.featuresNativeTextTracks?t.j.prototype.addTextTrack.call(this,a,c,d):this.c.addTextTrack(a,c,d)};
s.ha=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.ha.call(this,a);var c=document.createElement("track");a=a||{};a.kind&&(c.kind=a.kind);a.label&&(c.label=a.label);if(a.language||a.srclang)c.srclang=a.language||a.srclang;a["default"]&&(c["default"]=a["default"]);a.id&&(c.id=a.id);a.src&&(c.src=a.src);this.m().appendChild(c);P(this.X(),c.Y);return c};
s.Da=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.Da.call(this,a);var c,d;Q(this.X(),a);c=this.m().querySelectorAll("track");for(d=0;d<c.length;d++)if(c[d]===a||c[d].track===a){c[d].parentNode.removeChild(c[d]);break}};t.f.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.j.dc(t.f);var pa=t.f.prototype.ma,qa=t.f.prototype.ia;t.f.prototype.ma=function(a){var c=pa.call(this,a);this.dd=a.src;return c};t.f.prototype.ia=function(){this.dd=b;return qa.call(this)};
t.f.nativeSourceHandler={};t.f.nativeSourceHandler.canHandleSource=function(a){function c(a){try{return t.A.canPlayType(a)}catch(c){return""}}return a.type?c(a.type):a.src?(a=(a=a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i))&&a[1],c("video/"+a)):""};t.f.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.f.nativeSourceHandler.dispose=m();t.f.registerSourceHandler(t.f.nativeSourceHandler);t.f.Ld=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};
t.f.Kd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};t.f.Re=function(){var a;(a=!!t.A.textTracks)&&0<t.A.textTracks.length&&(a="number"!==typeof t.A.textTracks[0].mode);a&&t.gc&&(a=l);return a};t.f.prototype.featuresVolumeControl=t.f.Ld();t.f.prototype.featuresPlaybackRate=t.f.Kd();t.f.prototype.movingMediaElementInDOM=!t.xd;t.f.prototype.featuresFullscreenResize=f;t.f.prototype.featuresProgressEvents=f;t.f.prototype.featuresNativeTextTracks=t.f.Re();
var S,ra=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,sa=/^video\/mp4/i;t.f.Tc=function(){4<=t.ec&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ra.test(a)?"maybe":S.call(this,a)});t.Bd&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&sa.test(a)?"maybe":S.call(this,a)})};t.f.Ye=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=S;S=j;return a};
t.f.Tc();t.f.xb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");t.f.Kb=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.g=t.j.extend({l:function(a,c,d){t.j.call(this,a,c,d);var e=c.source;d=a.id()+"_flash_api";var g=a.q,g=t.i.D({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:g.autoplay,preload:g.Ra,loop:g.loop,muted:g.muted},c.flashVars),h=t.i.D({wmode:"opaque",bgcolor:"#000000"},c.params);d=t.i.D({id:d,name:d,"class":"vjs-tech"},c.attributes);e&&this.I(function(){this.ma(e)});t.Rb(this.c,c.parentEl);c.startTime&&this.I(function(){this.load();
this.play();this.currentTime(c.startTime)});t.gc&&this.I(function(){this.b("mousemove",function(){this.k().o({type:"mousemove",bubbles:l})})});a.b("stageclick",a.reportUserActivity);this.c=t.g.Dc(c.swf,this.c,g,h,d)}});s=t.g.prototype;s.dispose=function(){t.j.prototype.dispose.call(this)};s.play=function(){this.ended()&&this.setCurrentTime(0);this.c.vjs_play()};s.pause=function(){this.c.vjs_pause()};s.src=function(a){return a===b?this.currentSrc():this.na(a)};
s.na=function(a){a=t.Xd(a);this.c.vjs_src(a);if(this.d.autoplay()){var c=this;this.setTimeout(function(){c.play()},0)}};t.g.prototype.setCurrentTime=function(a){this.ke=a;this.c.vjs_setProperty("currentTime",a);t.j.prototype.Zb.call(this)};t.g.prototype.currentTime=function(){return this.seeking()?this.ke||0:this.c.vjs_getProperty("currentTime")};t.g.prototype.currentSrc=function(){return this.fb?this.fb.src:this.c.vjs_getProperty("currentSrc")};t.g.prototype.load=function(){this.c.vjs_load()};
t.g.prototype.poster=function(){this.c.vjs_getProperty("poster")};t.g.prototype.setPoster=m();s=t.g.prototype;s.seekable=function(){return 0===this.duration()?t.xa():t.xa(0,this.duration())};s.buffered=function(){return!this.c.vjs_getProperty?t.xa():t.xa(0,this.c.vjs_getProperty("buffered"))};s.duration=function(){return!this.c.vjs_getProperty?0:this.c.vjs_getProperty("duration")};s.Sa=p(l);s.Ec=p(l);
function ta(){var a=T[U],c=a.charAt(0).toUpperCase()+a.slice(1);ua["set"+c]=function(c){return this.c.vjs_setProperty(a,c)}}function va(a){ua[a]=function(){return this.c.vjs_getProperty(a)}}
var ua=t.g.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),wa="error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),U;for(U=0;U<T.length;U++)va(T[U]),ta();for(U=0;U<wa.length;U++)va(wa[U]);t.g.isSupported=function(){return 10<=t.g.version()[0]};t.j.dc(t.g);t.g.nativeSourceHandler={};
t.g.nativeSourceHandler.canHandleSource=function(a){return!a.type?"":a.type.replace(/;.*/,"").toLowerCase()in t.g.Wd?"maybe":""};t.g.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.g.nativeSourceHandler.dispose=m();t.g.registerSourceHandler(t.g.nativeSourceHandler);t.g.Wd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.g.onReady=function(a){var c;if(c=(a=t.m(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.g.checkReady(c.h)};
t.g.checkReady=function(a){a.m()&&(a.m().vjs_getProperty?a.Va():this.setTimeout(function(){t.g.checkReady(a)},50))};t.g.onEvent=function(a,c){t.m(a).player.o(c)};t.g.onError=function(a,c){var d=t.m(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
t.g.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.g.Dc=function(a,c,d,e,g){a=t.g.$d(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);a[t.expando]=c[t.expando];var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.g.$d=function(a,c,d,e){var g="",h="",k="";c&&t.i.ca(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.i.D({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.i.ca(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.i.D({data:a,width:"100%",height:"100%"},e);t.i.ca(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash" '+k+">"+h+"</object>"};t.g.Qe={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.g.Df=function(a,c){return a+"&"+c};
t.g.Pe=function(a){var c={yc:"",jd:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.yc=a.substring(0,d);c.jd=a.substring(e,a.length);return c};t.g.ie=function(a){return a in t.g.Qe};t.g.Dd=/^rtmp[set]?:\/\//i;t.g.he=function(a){return t.g.Dd.test(a)};t.g.Yb={};t.g.Yb.canHandleSource=function(a){return t.g.ie(a.type)||t.g.he(a.src)?"maybe":""};t.g.Yb.handleSource=function(a,c){var d=t.g.Pe(a.src);c.setRtmpConnection(d.yc);c.setRtmpStream(d.jd)};
t.g.registerSourceHandler(t.g.Yb);t.Cd=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);if(!a.q.sources||0===a.q.sources.length){c=0;for(d=a.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g&&g.isSupported()){ka(a,e);break}}}else a.src(a.q.sources)}});t.oc={disabled:"disabled",hidden:"hidden",showing:"showing"};t.Ed={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
t.t=function(a){var c,d,e,g,h,k,q,r,u,A,R;a=a||{};if(!a.player)throw Error("A player was not provided.");c=this;if(t.pa)for(R in c=document.createElement("custom"),t.t.prototype)c[R]=t.t.prototype[R];c.d=a.player;e=t.oc[a.mode]||"disabled";g=t.Ed[a.kind]||"subtitles";h=a.label||"";k=a.language||a.srclang||"";d=a.id||"vjs_text_track_"+t.s++;if("metadata"===g||"chapters"===g)e="hidden";c.V=[];c.Ia=[];q=new t.U(c.V);r=new t.U(c.Ia);A=l;u=t.bind(c,function(){this.activeCues;A&&(this.trigger("cuechange"),
A=l)});"disabled"!==e&&c.d.b("timeupdate",u);Object.defineProperty(c,"kind",{get:function(){return g},set:Function.prototype});Object.defineProperty(c,"label",{get:function(){return h},set:Function.prototype});Object.defineProperty(c,"language",{get:function(){return k},set:Function.prototype});Object.defineProperty(c,"id",{get:function(){return d},set:Function.prototype});Object.defineProperty(c,"mode",{get:function(){return e},set:function(a){t.oc[a]&&(e=a,"showing"===e&&this.d.b("timeupdate",u),
this.o("modechange"))}});Object.defineProperty(c,"cues",{get:function(){return!this.Ub?j:q},set:Function.prototype});Object.defineProperty(c,"activeCues",{get:function(){var a,c,d,e,g;if(!this.Ub)return j;if(0===this.cues.length)return r;e=this.d.currentTime();a=0;c=this.cues.length;for(d=[];a<c;a++)g=this.cues[a],g.startTime<=e&&g.endTime>=e?d.push(g):g.startTime===g.endTime&&(g.startTime<=e&&g.startTime+0.5>=e)&&d.push(g);A=l;if(d.length!==this.Ia.length)A=f;else for(a=0;a<d.length;a++)-1===xa.call(this.Ia,
d[a])&&(A=f);this.Ia=d;r.pb(this.Ia);return r},set:Function.prototype});a.src?ya(a.src,c):c.Ub=f;if(t.pa)return c};t.t.prototype=t.i.create(t.z.prototype);t.t.prototype.constructor=t.t;t.t.prototype.ab={cuechange:"cuechange"};t.t.prototype.sc=function(a){var c=this.d.textTracks(),d=0;if(c)for(;d<c.length;d++)c[d]!==this&&c[d].Yc(a);this.V.push(a);this.cues.pb(this.V)};t.t.prototype.Yc=function(a){for(var c=0,d=this.V.length,e,g=l;c<d;c++)e=this.V[c],e===a&&(this.V.splice(c,1),g=f);g&&this.Ac.pb(this.V)};
var ya,V,xa;ya=function(a,c){t.bf(a,t.bind(this,function(a,e,g){if(a)return t.log.error(a);c.Ub=f;V(g,c)}))};V=function(a,c){if("function"!==typeof window.WebVTT)window.setTimeout(function(){V(a,c)},25);else{var d=new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());d.oncue=function(a){c.sc(a)};d.onparsingerror=function(a){t.log.error(a)};d.parse(a);d.flush()}};
xa=function(a,c){var d;if(this==j)throw new TypeError('"this" is null or not defined');var e=Object(this),g=e.length>>>0;if(0===g)return-1;d=+c||0;Infinity===Math.abs(d)&&(d=0);if(d>=g)return-1;for(d=Math.max(0<=d?d:g-Math.abs(d),0);d<g;){if(d in e&&e[d]===a)return d;d++}return-1};
t.F=function(a){var c=this,d,e=0;if(t.pa)for(d in c=document.createElement("custom"),t.F.prototype)c[d]=t.F.prototype[d];a=a||[];c.Ua=[];for(Object.defineProperty(c,"length",{get:function(){return this.Ua.length}});e<a.length;e++)P(c,a[e]);if(t.pa)return c};t.F.prototype=t.i.create(t.z.prototype);t.F.prototype.constructor=t.F;t.F.prototype.ab={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var za in t.F.prototype.ab)t.F.prototype["on"+za]=j;
function P(a,c){var d=a.Ua.length;""+d in a||Object.defineProperty(a,d,{get:function(){return this.Ua[d]}});c.addEventListener("modechange",t.bind(a,function(){this.o("change")}));a.Ua.push(c);a.o({type:"addtrack",Y:c})}function Q(a,c){for(var d=0,e=a.length,g;d<e;d++)if(g=a[d],g===c){a.Ua.splice(d,1);break}a.o({type:"removetrack",Y:c})}t.F.prototype.ae=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};
t.U=function(a){var c=this,d;if(t.pa)for(d in c=document.createElement("custom"),t.U.prototype)c[d]=t.U.prototype[d];t.U.prototype.pb.call(c,a);Object.defineProperty(c,"length",{get:n("le")});if(t.pa)return c};t.U.prototype.pb=function(a){var c=this.length||0,d=0,e=a.length;this.V=a;this.le=a.length;a=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.V[a]}})};if(c<e)for(d=c;d<e;d++)a.call(this,d)};
t.U.prototype.Zd=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};t.sa=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);a.b("loadstart",t.bind(this,this.Ve));a.I(t.bind(this,function(){if(a.h&&a.h.featuresNativeTextTracks)this.W();else{var c,d,h;a.b("fullscreenchange",t.bind(this,this.C));d=a.q.tracks||[];for(c=0;c<d.length;c++)h=d[c],this.d.ha(h)}}))}});t.sa.prototype.Ve=function(){this.d.h&&this.d.h.featuresNativeTextTracks?this.W():this.show()};
t.sa.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.sa.prototype.Md=function(){"function"===typeof window.WebVTT&&window.WebVTT.processCues(window,[],this.c)};function W(a,c){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+c+")"}
var Aa={tf:"monospace",zf:"sans-serif",Bf:"serif",uf:'"Andale Mono", "Lucida Console", monospace',vf:'"Courier New", monospace',xf:"sans-serif",yf:"serif",kf:'"Comic Sans MS", Impact, fantasy',Af:'"Monotype Corsiva", cursive',Cf:'"Andale Mono", "Lucida Console", monospace, sans-serif'};t.sa.prototype.C=function(){var a=this.d.textTracks(),c=0,d;this.Md();if(a)for(;c<a.length;c++)d=a[c],"showing"===d.mode&&this.Ze(d)};
t.sa.prototype.Ze=function(a){if("function"===typeof window.WebVTT&&a.activeCues){for(var c=0,d=this.d.textTrackSettings.Hc(),e,g=[];c<a.activeCues.length;c++)g.push(a.activeCues[c]);window.WebVTT.processCues(window,a.activeCues,this.c);for(c=g.length;c--;){a=g[c].lf;d.color&&(a.firstChild.style.color=d.color);if(d.kd)try{a.firstChild.style.color=W(d.color||"#fff",d.kd)}catch(h){}d.backgroundColor&&(a.firstChild.style.backgroundColor=d.backgroundColor);if(d.vc)try{a.firstChild.style.backgroundColor=
W(d.backgroundColor||"#000",d.vc)}catch(k){}if(d.cc)if(d.rd)try{a.style.backgroundColor=W(d.cc,d.rd)}catch(q){}else a.style.backgroundColor=d.cc;d.Ma&&("dropshadow"===d.Ma?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===d.Ma?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===d.Ma?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===d.Ma&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
d.Ob&&1!==d.Ob&&(e=window.wf(a.style.fontSize),a.style.fontSize=e*d.Ob+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px");d.fontFamily&&"default"!==d.fontFamily&&("small-caps"===d.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Aa[d.fontFamily])}}};
t.$=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=a.textTracks(),g,h;e&&(g=t.bind(this,function(){var a="showing"===this.Y.mode,c,d,g;if(this instanceof t.zb){a=f;d=0;for(g=e.length;d<g;d++)if(c=e[d],c.kind===this.Y.kind&&"showing"===c.mode){a=l;break}}this.selected(a)}),e.addEventListener("change",g),a.b("dispose",function(){e.removeEventListener("change",g)}));c.label=d.label||d.language||"Unknown";c.selected=d["default"]||"showing"===d.mode;t.M.call(this,a,c);e&&e.onchange===b&&this.b(["tap",
"click"],function(){if("object"!==typeof window.vd)try{h=new window.vd("change")}catch(a){}h||(h=document.createEvent("Event"),h.initEvent("change",f,f));e.dispatchEvent(h)})}});t.$.prototype.u=function(){var a=this.Y.kind,c=this.d.textTracks(),d,e=0;t.M.prototype.u.call(this);if(c)for(;e<c.length;e++)d=c[e],d.kind===a&&(d.mode=d===this.Y?"showing":"disabled")};t.zb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" off","default":l,mode:"disabled"};t.$.call(this,a,c);this.selected(f)}});
t.sb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" settings","default":l,mode:"disabled"};t.$.call(this,a,c);this.p("vjs-texttrack-settings")}});t.sb.prototype.u=function(){this.k().da("textTrackSettings").show()};
t.Q=t.O.extend({l:function(a,c){var d,e;t.O.call(this,a,c);d=this.d.textTracks();1>=this.H.length&&this.W();d&&(e=t.bind(this,this.update),d.addEventListener("removetrack",e),d.addEventListener("addtrack",e),this.d.b("dispose",function(){d.removeEventListener("removetrack",e);d.removeEventListener("addtrack",e)}))}});
t.Q.prototype.Ka=function(){var a=[],c,d;this instanceof t.oa&&(!this.k().h||!this.k().h.featuresNativeTextTracks)&&a.push(new t.sb(this.d,{kind:this.ea}));a.push(new t.zb(this.d,{kind:this.ea}));d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};t.oa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Captions Menu")}});t.oa.prototype.ea="captions";t.oa.prototype.ta="Captions";
t.oa.prototype.className="vjs-captions-button";t.oa.prototype.update=function(){var a=2;t.Q.prototype.update.call(this);this.k().h&&this.k().h.featuresNativeTextTracks&&(a=1);this.H&&this.H.length>a?this.show():this.W()};t.$a=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Subtitles Menu")}});t.$a.prototype.ea="subtitles";t.$a.prototype.ta="Subtitles";t.$a.prototype.className="vjs-subtitles-button";
t.Wa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Chapters Menu")}});s=t.Wa.prototype;s.ea="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.Ka=function(){var a=[],c,d;d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};
s.La=function(){for(var a=this.d.textTracks()||[],c=0,d=a.length,e,g,h=this.H=[];c<d;c++)if(e=a[c],e.kind==this.ea)if(e.Ac){g=e;break}else e.mode="hidden",window.setTimeout(t.bind(this,function(){this.La()}),100);a=this.za;a===b&&(a=new t.qa(this.d),a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.ea),Se:-1})));if(g){e=g.cues;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new t.Xa(this.d,{track:g,cue:k}),h.push(k),a.aa(k);this.aa(a)}0<this.H.length&&this.show();return a};
t.Xa=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.endTime;t.M.call(this,a,c);d.addEventListener("cuechange",t.bind(this,this.update))}});t.Xa.prototype.u=function(){t.M.prototype.u.call(this);this.d.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.Xa.prototype.update=function(){var a=this.cue,c=this.d.currentTime();this.selected(a.startTime<=c&&c<a.endTime)};
function X(a){var c;a.Ge?c=a.Ge[0]:a.options&&(c=a.options[a.options.selectedIndex]);return c.value}function Y(a,c){var d,e;if(c){for(d=0;d<a.options.length&&!(e=a.options[d],e.value===c);d++);a.selectedIndex=d}}
t.pc=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.W();t.b(this.m().querySelector(".vjs-done-button"),"click",t.bind(this,function(){this.Fe();this.W()}));t.b(this.m().querySelector(".vjs-default-button"),"click",t.bind(this,function(){this.m().querySelector(".vjs-fg-color > select").selectedIndex=0;this.m().querySelector(".vjs-bg-color > select").selectedIndex=0;this.m().querySelector(".window-color > select").selectedIndex=0;this.m().querySelector(".vjs-text-opacity > select").selectedIndex=
0;this.m().querySelector(".vjs-bg-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-window-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-edge-style select").selectedIndex=0;this.m().querySelector(".vjs-font-family select").selectedIndex=0;this.m().querySelector(".vjs-font-percent select").selectedIndex=2;this.C()}));t.b(this.m().querySelector(".vjs-fg-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-color > select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".window-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-text-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-window-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-font-percent select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-edge-style select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".vjs-font-family select"),"change",t.bind(this,this.C));a.options().persistTextTrackSettings&&this.Ee()}});s=t.pc.prototype;s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:'<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'})};
s.Hc=function(){var a,c,d,e,g,h,k,q,r,u;a=this.m();g=X(a.querySelector(".vjs-edge-style select"));h=X(a.querySelector(".vjs-font-family select"));k=X(a.querySelector(".vjs-fg-color > select"));d=X(a.querySelector(".vjs-text-opacity > select"));q=X(a.querySelector(".vjs-bg-color > select"));c=X(a.querySelector(".vjs-bg-opacity > select"));r=X(a.querySelector(".window-color > select"));e=X(a.querySelector(".vjs-window-opacity > select"));a=window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
c={backgroundOpacity:c,textOpacity:d,windowOpacity:e,edgeStyle:g,fontFamily:h,color:k,backgroundColor:q,windowColor:r,fontPercent:a};for(u in c)(""===c[u]||"none"===c[u]||"fontPercent"===u&&1===c[u])&&delete c[u];return c};
s.Ne=function(a){var c=this.m();Y(c.querySelector(".vjs-edge-style select"),a.Ma);Y(c.querySelector(".vjs-font-family select"),a.fontFamily);Y(c.querySelector(".vjs-fg-color > select"),a.color);Y(c.querySelector(".vjs-text-opacity > select"),a.kd);Y(c.querySelector(".vjs-bg-color > select"),a.backgroundColor);Y(c.querySelector(".vjs-bg-opacity > select"),a.vc);Y(c.querySelector(".window-color > select"),a.cc);Y(c.querySelector(".vjs-window-opacity > select"),a.rd);(a=a.Ob)&&(a=a.toFixed(2));Y(c.querySelector(".vjs-font-percent > select"),
a)};s.Ee=function(){var a;try{a=JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))}catch(c){}a&&this.Ne(a)};s.Fe=function(){var a;if(this.d.options().persistTextTrackSettings){a=this.Hc();try{t.hb(a)?window.localStorage.removeItem("vjs-text-track-settings"):window.localStorage.setItem("vjs-text-track-settings",JSON.stringify(a))}catch(c){}}};s.C=function(){var a=this.d.da("textTrackDisplay");a&&a.C()};
if("undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var k,q,r=a[e];if(r&&"object"===typeof r)for(k in r)Object.prototype.hasOwnProperty.call(r,k)&&(q=d(r,k),q!==b?r[k]=q:delete r[k]);return c.call(a,e,r)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+
a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.uc=function(){var a,c,d,e;a=document.getElementsByTagName("video");c=document.getElementsByTagName("audio");var g=[];if(a&&0<a.length){d=0;for(e=a.length;d<e;d++)g.push(a[d])}if(c&&0<c.length){d=0;for(e=c.length;d<e;d++)g.push(c[d])}if(g&&0<g.length){d=0;for(e=g.length;d<e;d++)if((c=g[d])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&videojs(c));else{t.Hb();break}}else t.qd||t.Hb()};t.Hb=function(){setTimeout(t.uc,1)};
"complete"===document.readyState?t.qd=f:t.N(window,"load",function(){t.qd=f});t.Hb();t.Be=function(a,c){t.Player.prototype[a]=c};var Ba=this;function $(a,c){var d=a.split("."),e=Ba;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ca);$("videojs.TOUCH_ENABLED",t.Db);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.k;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.l;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.wa;t.a.prototype.el=t.a.prototype.m;t.a.prototype.addChild=t.a.prototype.aa;
t.a.prototype.getChild=t.a.prototype.da;t.a.prototype.getChildById=t.a.prototype.Yd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.Kc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.b;t.a.prototype.off=t.a.prototype.n;t.a.prototype.one=t.a.prototype.N;t.a.prototype.trigger=t.a.prototype.o;t.a.prototype.triggerReady=t.a.prototype.Va;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.W;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.Qd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.p;t.a.prototype.removeClass=t.a.prototype.r;t.a.prototype.hasClass=t.a.prototype.Pa;t.a.prototype.buildCSSClass=t.a.prototype.T;t.a.prototype.localize=t.a.prototype.v;t.a.prototype.setInterval=t.a.prototype.setInterval;t.a.prototype.setTimeout=t.a.prototype.setTimeout;$("videojs.EventEmitter",t.z);
t.z.prototype.on=t.z.prototype.b;t.z.prototype.addEventListener=t.z.prototype.addEventListener;t.z.prototype.off=t.z.prototype.n;t.z.prototype.removeEventListener=t.z.prototype.removeEventListener;t.z.prototype.one=t.z.prototype.N;t.z.prototype.trigger=t.z.prototype.o;t.z.prototype.dispatchEvent=t.z.prototype.dispatchEvent;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.Fc;t.Player.prototype.exitFullWindow=t.Player.prototype.Lb;
t.Player.prototype.preload=t.Player.prototype.Ra;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Sa;t.Player.prototype.currentType=t.Player.prototype.Nd;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;t.Player.prototype.textTracks=t.Player.prototype.textTracks;t.Player.prototype.remoteTextTracks=t.Player.prototype.X;t.Player.prototype.addTextTrack=t.Player.prototype.addTextTrack;t.Player.prototype.addRemoteTextTrack=t.Player.prototype.ha;t.Player.prototype.removeRemoteTextTrack=t.Player.prototype.Da;t.Player.prototype.seekable=t.Player.prototype.seekable;
$("videojs.MediaLoader",t.Cd);$("videojs.TextTrackDisplay",t.sa);$("videojs.ControlBar",t.tb);$("videojs.Button",t.w);$("videojs.PlayToggle",t.kc);$("videojs.FullscreenToggle",t.Ya);$("videojs.BigPlayButton",t.rb);$("videojs.LoadingSpinner",t.ic);$("videojs.CurrentTimeDisplay",t.ub);$("videojs.DurationDisplay",t.vb);$("videojs.TimeDivider",t.qc);$("videojs.RemainingTimeDisplay",t.Cb);$("videojs.LiveDisplay",t.hc);$("videojs.ErrorDisplay",t.wb);$("videojs.Slider",t.S);$("videojs.ProgressControl",t.Bb);
$("videojs.SeekBar",t.nc);$("videojs.LoadProgressBar",t.yb);$("videojs.PlayProgressBar",t.jc);$("videojs.SeekHandle",t.Za);$("videojs.VolumeControl",t.Fb);$("videojs.VolumeBar",t.Eb);$("videojs.VolumeLevel",t.rc);$("videojs.VolumeMenuButton",t.Ha);$("videojs.VolumeHandle",t.Gb);$("videojs.MuteToggle",t.ra);$("videojs.PosterImage",t.mc);$("videojs.Menu",t.qa);$("videojs.MenuItem",t.M);$("videojs.MenuButton",t.O);$("videojs.PlaybackRateMenuButton",t.lc);$("videojs.ChaptersTrackMenuItem",t.Xa);
$("videojs.TextTrackButton",t.Q);$("videojs.TextTrackMenuItem",t.$);$("videojs.OffTextTrackMenuItem",t.zb);$("videojs.CaptionSettingsMenuItem",t.sb);t.O.prototype.createItems=t.O.prototype.Ka;t.Q.prototype.createItems=t.Q.prototype.Ka;t.Wa.prototype.createItems=t.Wa.prototype.Ka;$("videojs.SubtitlesButton",t.$a);$("videojs.CaptionsButton",t.oa);$("videojs.ChaptersButton",t.Wa);$("videojs.MediaTechController",t.j);t.j.withSourceHandlers=t.j.dc;t.j.prototype.featuresVolumeControl=t.j.prototype.qf;
t.j.prototype.featuresFullscreenResize=t.j.prototype.mf;t.j.prototype.featuresPlaybackRate=t.j.prototype.nf;t.j.prototype.featuresProgressEvents=t.j.prototype.of;t.j.prototype.featuresTimeupdateEvents=t.j.prototype.pf;t.j.prototype.setPoster=t.j.prototype.bd;t.j.prototype.textTracks=t.j.prototype.textTracks;t.j.prototype.remoteTextTracks=t.j.prototype.X;t.j.prototype.addTextTrack=t.j.prototype.addTextTrack;t.j.prototype.addRemoteTextTrack=t.j.prototype.ha;t.j.prototype.removeRemoteTextTrack=t.j.prototype.Da;
$("videojs.Html5",t.f);t.f.Events=t.f.xb;t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.wc;t.f.patchCanPlayType=t.f.Tc;t.f.unpatchCanPlayType=t.f.Ye;t.f.prototype.setCurrentTime=t.f.prototype.Zb;t.f.prototype.setVolume=t.f.prototype.Oe;t.f.prototype.setMuted=t.f.prototype.Ke;t.f.prototype.setPreload=t.f.prototype.Me;t.f.prototype.setAutoplay=t.f.prototype.He;t.f.prototype.setLoop=t.f.prototype.Je;t.f.prototype.enterFullScreen=t.f.prototype.Ec;t.f.prototype.exitFullScreen=t.f.prototype.Ud;
t.f.prototype.playbackRate=t.f.prototype.playbackRate;t.f.prototype.setPlaybackRate=t.f.prototype.Le;t.f.selectSourceHandler=t.f.ob;t.f.prototype.setSource=t.f.prototype.ma;t.f.prototype.disposeSourceHandler=t.f.prototype.ia;t.f.prototype.textTracks=t.f.prototype.textTracks;t.f.prototype.remoteTextTracks=t.f.prototype.X;t.f.prototype.addTextTrack=t.f.prototype.addTextTrack;t.f.prototype.addRemoteTextTrack=t.f.prototype.ha;t.f.prototype.removeRemoteTextTrack=t.f.prototype.Da;$("videojs.Flash",t.g);
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.wc;t.g.onReady=t.g.onReady;t.g.embed=t.g.Dc;t.g.version=t.g.version;t.g.prototype.setSource=t.g.prototype.ma;t.g.selectSourceHandler=t.g.ob;t.g.prototype.setSource=t.g.prototype.ma;t.g.prototype.disposeSourceHandler=t.g.prototype.ia;$("videojs.TextTrack",t.t);$("videojs.TextTrackList",t.F);$("videojs.TextTrackCueList",t.U);$("videojs.TextTrackSettings",t.pc);t.t.prototype.id=t.t.prototype.id;t.t.prototype.label=t.t.prototype.label;
t.t.prototype.kind=t.t.prototype.Tb;t.t.prototype.mode=t.t.prototype.mode;t.t.prototype.cues=t.t.prototype.Ac;t.t.prototype.activeCues=t.t.prototype.jf;t.t.prototype.addCue=t.t.prototype.sc;t.t.prototype.removeCue=t.t.prototype.Yc;t.F.prototype.getTrackById=t.F.prototype.ae;t.U.prototype.getCueById=t.F.prototype.Zd;$("videojs.CaptionsTrack",t.cf);$("videojs.SubtitlesTrack",t.hf);$("videojs.ChaptersTrack",t.df);$("videojs.autoSetup",t.uc);$("videojs.plugin",t.Be);$("videojs.createTimeRange",t.xa);
$("videojs.util",t.Z);t.Z.mergeOptions=t.Z.Aa;t.addLanguage=t.Gd;})();

/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */
!function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return b?a.toLowerCase():!1}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}this.applyStyles(""===b.vertical?{left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}:{top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return(c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b)?(this.set(a,b),!0):!1}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});!function(a,t,e,n,m){m=t.location,Math.random()>.01||(a.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn="+n(m.hostname)+"&utmsr="+t.screen.availWidth+"x"+t.screen.availHeight+"&utmul="+(e.language||e.userLanguage||"").toLowerCase()+"&utmr="+n(m.href)+"&utmp="+n(m.hostname+m.pathname)+"&utmcc=__utma%3D1."+Math.floor(1e10*Math.random())+".1.1.1.1%3B"+"&utme=8(vjsv)9(v4.12.15)")}(new Image,window,navigator,encodeURIComponent);;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-video-templates.js' */
// This file was automatically generated from video-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.avPlayer.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }
if (typeof FileViewer.Templates.avPlayer == 'undefined') { FileViewer.Templates.avPlayer = {}; }


FileViewer.Templates.avPlayer.playerBody = function(opt_data, opt_ignored) {
  return '<div class="cp-video-container">' + ((opt_data.kind == 'audio') ? '<audio id="cp-video-player" class="video-js vjs-atlassian-skin" poster="' + soy.$$escapeHtml(opt_data.poster) + '"><source src="' + soy.$$escapeHtml(opt_data.src) + '" type="' + soy.$$escapeHtml(opt_data.type) + '" /></audio>' : '<video id="cp-video-player" class="video-js vjs-atlassian-skin" poster="' + soy.$$escapeHtml(opt_data.poster) + '"><source src="' + soy.$$escapeHtml(opt_data.src) + '" type="' + soy.$$escapeHtml(opt_data.type) + '" /></video>') + '</div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.playerBody.soyTemplateName = 'FileViewer.Templates.avPlayer.playerBody';
}


FileViewer.Templates.avPlayer.progressTooltip = function(opt_data, opt_ignored) {
  return '<div id=\'vjs-tip\'><div id=\'vjs-tip-arrow\'></div><div id=\'vjs-tip-inner\'></div></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.progressTooltip.soyTemplateName = 'FileViewer.Templates.avPlayer.progressTooltip';
}


FileViewer.Templates.avPlayer.customControlBarItem = function(opt_data, opt_ignored) {
  return '<div class="vjs-control-content"><span class="vjs-control-text">' + soy.$$escapeHtml(opt_data.descr) + '</span></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.customControlBarItem.soyTemplateName = 'FileViewer.Templates.avPlayer.customControlBarItem';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-video.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('video-view/button-presentation-mode', [], function () {
  'use strict';

  var videojs = window.videojs;

  var ButtonPresentationMode = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;

      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-presentation-control vjs-control',
          innerHTML: [
            '<div class="vjs-control-content">',
            '<span class="vjs-control-text">',
            'Presentation Mode',
            '</span>',
            '</div>'
          ].join(''),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.changeMode);
    }
  });

  ButtonPresentationMode.asPlugin = function (fileViewer) {
    return function (options) {
      var player = this;
      var button = new ButtonPresentationMode({
        player: player,
        fileViewer: fileViewer
      });

      button.options = options;

      player.ready(function () {
        player.controlBar.addChild(button);
      });
    };
  };

  ButtonPresentationMode.prototype.changeMode = function () {
    if (this._fileViewer.isInMode('PRESENTATION')) {
      this._fileViewer.changeMode('BASE');
    } else {
      this._fileViewer.changeMode('PRESENTATION');
    }
  };

  return ButtonPresentationMode;
});

define('video-view/button-toggle-hd', [
  'template-store-singleton',
  'jquery'
], function (
  templateStore,
  $
) {
  'use strict';

  var videojs = window.videojs;

  var ButtonToggleHd = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;
      this._isPlayingHd = opts.isPlayingHd;

      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-hd-control vjs-control',
          innerHTML: templateStore.get('avPlayer.customControlBarItem')({
            descr: 'Toggle HD/SD Quality'
          }),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.toggleSource);
    }
  });

  ButtonToggleHd.asPlugin = function (fileViewer) {
    return function (options) {
      if (!options.src_hd) {
        return;
      }

      var player = this;
      var button = new ButtonToggleHd({
        player: player,
        fileViewer: fileViewer,
        isPlayingHd: options.hd_active
      });

      button.options = options;

      player.ready(function () {
        $(this.el()).addClass('vjs-hd-source');
        if (options.hd_active) {
          $(this.el()).addClass('vjs-hd-playing');
        }
        player.controlBar.addChild(button);
      });
    };
  };

  /**
   * Set preload attribute to make sure `loadedmetadata` is triggered
   */
  ButtonToggleHd.prototype.fixPreload = function () {
    var player = this._player;
    if (player.el().firstChild.preload === 'none') {
      player.el().firstChild.preload = 'metadata';
    }
  };

  /**
   * Update the players video and poster src and seek to position if given
   * @param {Object} options
   * @param {Number} options.position Time in seconds to start playing
   * @param {String} options.src Url of video source
   * @param {String} options.poster Url of video poster source
   */
  ButtonToggleHd.prototype.switchSource = function (options) {
    var player = this._player;
    var playerEl = $(player.el());
    var wasPaused = player.paused();
    var hasStarted = playerEl.hasClass('vjs-has-started');

    this.fixPreload();
    // Remove <source> to prevent playing both streams
    playerEl.find('source').remove();
    // Remove poster attribute so it doesn't show up when switching streams
    player.poster('');
    if (options.position) {
      // Hide <video> tag to prevent showing the new stream starting
      // at the beginning
      $(player.tag).css('display', 'none');
    }
    player.src(options.src);
    player.ready(function () {
      player.one('loadedmetadata', function () {
        player.poster(options.poster);
        if (hasStarted) {
          playerEl.addClass('vjs-has-started');
        }
      }.bind(player));
      if (options.position) {
        player.one('loadeddata', function () {
          player.currentTime(options.position);
          if (wasPaused) {
            player.pause();
          } else {
            player.play();
          }
        });
      }
      // Show <video> again when seeking is done
      player.one('seeked', function () {
        $(player.tag).css('display', 'block');
      });
    });
  };

  ButtonToggleHd.prototype.toggleSource = function () {
    var player = this._player;
    var playerEl = $(player.el());
    var options = {
      position: player.tech.currentTime(),
      src: '',
      poster: ''
    };

    if (this._isPlayingHd) {
      this._isPlayingHd = false;
      this._fileViewer.getStorage().setItem('videoQualityHd', false);
      options.src = this.options.src;
      options.poster = this.options.poster;
      playerEl.removeClass('vjs-hd-playing');
    } else {
      this._isPlayingHd = true;
      this._fileViewer.getStorage().setItem('videoQualityHd', true);
      options.src = this.options.src_hd;
      options.poster = this.options.poster_hd;
      playerEl.addClass('vjs-hd-playing');
    }
    this.switchSource(options);
  };

  return ButtonToggleHd;
});

define('video-view/button-youtube', [
  'template-store-singleton',
  'url'
], function (
  templateStore,
  urlHelper
) {
  'use strict';

  var videojs = window.videojs;

  var ButtonYoutube = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;
      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-youtube-control vjs-control',
          innerHTML: templateStore.get('avPlayer.customControlBarItem')({descr: 'Youtube'}),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.openYoutubePage);
    }
  });

  ButtonYoutube.asPlugin = function (fileViewer) {
    return function (options) {
      var player = this;
      var button = new ButtonYoutube({
        player: player,
        fileViewer: fileViewer
      });
      player.ready(function () { player.controlBar.addChild(button); });
    };
  };

  ButtonYoutube.prototype.openYoutubePage = function () {
    var srcYoutube;
    this._fileViewer.analytics.send('files.fileviewer-web.file.gotoyoutube');
    this._player.pause();
    srcYoutube = urlHelper.addQueryParamToUrl(this._player.src(), {
      start: Math.round(this._player.currentTime()),
      autoplay: 1
    });
    window.open(srcYoutube, '_blank');
  };

  return ButtonYoutube;
});

define('video-view/plugin-progress-tooltips', [
  'template-store-singleton',
  'jquery'
], function (
  templateStore,
  $
) {
  'use strict';

  var PluginProgressTooltips = function (options) {
    var player = this;
    var init = function () {
      $('#vjs-tip').remove();
      var tipHtml = templateStore.get('avPlayer.progressTooltip')();
      $('.vjs-progress-control').after(tipHtml);

      $('.vjs-progress-holder').on('mousemove', function (event) {
        var minutes,
          seconds,
          seekBar,
          timeInSeconds,
          mousePosition;

        seekBar = player.controlBar.progressControl.seekBar;
        mousePosition = (event.pageX - $(seekBar.el()).offset().left) / seekBar.width();
        timeInSeconds = mousePosition * player.duration();

        if (timeInSeconds === player.duration()) {
          timeInSeconds = timeInSeconds - 0.1;
        }

        minutes = Math.floor(timeInSeconds / 60);
        seconds = Math.floor(timeInSeconds - minutes * 60);

        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        $('#vjs-tip-inner').text([minutes, ':', seconds].join(''));

        var $el = $('.vjs-control-bar');
        var tooltipWidth = $('#vjs-tip').outerWidth();
        var left = event.pageX - $el.offset().left - Math.round(tooltipWidth / 2);
        $('#vjs-tip').css('left', left + 'px').css('display', 'block');
      });

      $('.vjs-progress-holder, .vjs-play-control').on('mouseout', function () {
        $('#vjs-tip').css('display', 'none');
      });
    };
    this.on('loadedmetadata', init);
  };

  return PluginProgressTooltips;
});

define('video-view', [
  'ajs',
  'backbone',
  'underscore',
  'jquery',
  'file',
  'BaseViewer',
  'instance-manager',
  'file-types',
  'template-store-singleton',
  'keyboard',
  'video-view/button-youtube',
  'video-view/button-toggle-hd',
  'video-view/button-presentation-mode',
  'video-view/plugin-progress-tooltips'
], function (
  AJS,
  Backbone,
  _,
  $,
  File,
  BaseViewer,
  InstanceManager,
  fileTypes,
  templateStore,
  keyboard,
  buttonYoutube,
  buttonToggleHd,
  buttonPresentationMode,
  pluginProgressTooltips
) {
  /*global videojs*/
  'use strict';

  var playerManager = new InstanceManager(videojs, function (player) {
    /*
    videojs players created for files with unsupported codecs
    throw an uncaught error when calling pause()
    see HC-19832 https://jira.atlassian.com/browse/HC-19832

    As soon as PR on video.js is merged we can update and removed the
    `player.tech` check here
    see https://github.com/videojs/video.js/pull/2676
    */
    player.tech && player.pause();
    player.dispose();
  });

  var VideoView = BaseViewer.extend({

    id: 'cp-video-preview',

    playerId: 'cp-video-player',

    events: {
      'click .vjs-poster' : 'togglePlay'
    },

    initialize: function () {
      BaseViewer.prototype.initialize.apply(this, arguments);
      var type     = this.model.get('type');

      this._paddingVertical  = 20;
      this._paddingScrollbar = 40;
      this._paddingNavArrows = 160;

      this._isPaused    = true;
      this._isVideo   = fileTypes.isVideo(type);
      this._isAudio   = fileTypes.isAudio(type);
      this._isYoutube   = fileTypes.isYoutube(type);
      this._isAutoPlay  = this._fileViewer.get('videoViewerAutoplay');
      this._maxWidth    = this._isVideo ? 1280 : 640;
      this._maxHeight   = this._isVideo ? 720 : 640;
      this._minWidth    = this._isVideo ? 160 : 120;
      this._minHeight   = this._isVideo ? 90  : 120;
      this._hasHdSource = this.model.get('src_hd') ? true : false;

      $(window).on(
        'resize.videojs',
        _.throttle(this._handleResize.bind(this), 50)
      );
      $(document).on(
        'keydown.videoView',
        keyboard.createConditionalKeyHandler(this._handleKeyboardControl.bind(this))
      );
    },

    teardown: function () {
      $(window).off('resize.videojs', this._handleResize);
      $(document).off('keydown.videoView');
      playerManager.destroy();
    },

    clickHitBackground: function (e) {
      var hitBackground = e.target.getAttribute('id') === this.id;
      return hitBackground;
    },

    setupMode: function (mode) {
      $('.cp-toolbar-layer').hide();
    },

    _handleKeyboardControl: function (e) {
      if (e.which === keyboard.keys.SPACE || e.which === keyboard.keys.ENTER) {
        this.togglePlay();
        e.preventDefault();
      }
    },

    render: function () {
      var type = this.model.get('type');

      this.$el.html(templateStore.get('avPlayer.playerBody')({
        src: this._getVideoSrc(),
        poster: this._getPosterSrc(),
        type: type,
        kind: this._isVideo ? 'video' : 'audio'
      }));

      playerManager.create(this.playerId, {
        plugins: this._registerPlugins(),
        controls: true,
        ytFullScreenControls: false,
        textTrackDisplay: false,
        errorDisplay: false,
        controlBar: {
          timeDivider: false,
          remainingTimeDisplay: false,
          liveDisplay: false,
          fullscreenToggle: false,
          muteToggle: false,
          volumeMenuButton: false,
          playbackRateMenuButton: true,
          subtitlesButton: false,
          captionsButton: false,
          chaptersButton: false
        },
        autoplay: this._isAutoPlay,
        preload: true,
        width: this._maxWidth,
        height: this._maxHeight
      }).then(this._setupPlayer.bind(this));

      return this;
    },

    play: function () {
      this._videoPlayer.play();
    },

    togglePlay: function () {
      if (this._videoPlayer && this._isPaused) {
        this._videoPlayer.play();
      } else if (this._videoPlayer) {
        this._videoPlayer.pause();
      }
    },

    // Set focus back to our main element if the active element
    // is the iFrame. This is to prevent losing focus to the youtube
    // embedded player.
    _refocusFileViewer: function () {
      if (document.activeElement.tagName === 'IFRAME') {
        var $container = $('#cp-container');
        $container.attr('tabindex', -1);
        $container.focus();
      }
    },

    handleResize: function () {
      this._handleResize();
    },

    _handleResize: function () {
      var containerWidth  = Math.max(
        (this.$el.width() - this._paddingNavArrows),
        this._minWidth
      );
      var containerHeight = Math.max(
        (this.$el.height() - this._paddingVertical),
        this._minHeight
      );

      var $videoEl  = $(this._videoPlayer.el());
      var videoWidth  = $videoEl.width();
      var videoHeight = $videoEl.height();

      var ratio  = Math.min(
        (containerWidth / videoWidth),
        (containerHeight / videoHeight)
      );
      var newWidth  = Math.min(this._maxWidth, (videoWidth * ratio));
      var newHeight = Math.min(this._maxHeight, (videoHeight * ratio));

      $videoEl.css('width', newWidth).css('height', newHeight);
    },

    _videoError: function () {
      var err = new Error('Media failed loading');

      err.title = "Ouch! We can\'t load the media file.";
      err.description = this.model.get('src');
      err.icon = 'cp-multimedia-icon';

      if (!this.viewerReady) {
        $('#' + this.playerId).remove();
        this.trigger('viewerFail', err);
      }
    },

    _videoLoadedMetaData: function () {
      $('#' + this.playerId).addClass('vjs-ready');
      this.trigger('viewerReady');
      this.viewerReady = true;
    },

    _videoVolumeChange: function () {
      var storage = this._fileViewer.getStorage();
      storage.setItem('videoVolume', this._videoPlayer.volume());
    },

    _videoPlay: function () {
      this._refocusFileViewer();
      this._isPaused = false;
      $(this._videoPlayer.el()).removeClass('vjs-has-ended');
    },

    _videoPause: function () {
      this._refocusFileViewer();
      this._isPaused = true;
    },

    _videoEnded: function () {
      $(this._videoPlayer.el()).addClass('vjs-has-ended');
    },

    _restoreVolumeSetting: function () {
      var storage   = this._fileViewer.getStorage();
      var volumeLevel = parseFloat(storage.getItem('videoVolume'));
      if (!isNaN(volumeLevel)) {
        this._videoPlayer.volume(volumeLevel);
      }
    },

    _restoreVideoPosterIfNotSet: function () {
      var currentPoster = this._videoPlayer.poster();
      var posterSrc   = this._getPosterForCurrentQuality();
      if (this._isVideo && !currentPoster) {
        this._videoPlayer.poster(posterSrc);
      }
    },

    _handlePlayerReady: function () {
      this.viewerReady = false;
      this._restoreVolumeSetting();

      // VideoJS 4.12.15 adds tabindex=0 to control bar play button
      // Tabindex needs to be removed to prevent focus staying on the play button
      // and breaking keyboard control (SPACE) to play/pause.
      $(this._videoPlayer.el()).find('.vjs-control').each(function (idx, el) {
        $(el).removeAttr('tabindex');
      });

      // In case the poster was removed for autoplaying videos
      // it now is added again to be displayed after the video ended.
      this._videoPlayer.one('timeupdate',
        this._restoreVideoPosterIfNotSet.bind(this)
      );
      this._videoPlayer.on('loadedmetadata',
        this._videoLoadedMetaData.bind(this)
      );
      this._videoPlayer.on('volumechange',
        this._videoVolumeChange.bind(this)
      );
      this._videoPlayer.on('error',
        this._videoError.bind(this)
      );
      this._videoPlayer.on('play',
        this._videoPlay.bind(this)
      );
      this._videoPlayer.on('pause',
        this._videoPause.bind(this)
      );
      this._videoPlayer.on('ended',
        this._videoEnded.bind(this)
      );
    },

    _registerPlugins: function () {
      var pluginsObject = {};

      videojs.plugin('pluginProgressTooltips', pluginProgressTooltips);
      pluginsObject.pluginProgressTooltips = {};

      videojs.plugin('presentation', buttonPresentationMode.asPlugin(this._fileViewer));
      pluginsObject.presentation = {viewer: this};

      videojs.plugin('buttonToggleHd', buttonToggleHd.asPlugin(this._fileViewer));
      pluginsObject.buttonToggleHd = {
        src: this.model.get('src'),
        src_hd: this.model.get('src_hd') || '',
        poster: this.model.get('poster') || '',
        poster_hd: this.model.get('poster_hd') || this.model.get('poster') || '',
        hd_active: this._shouldUseHdSource()
      };

      if (this._isYoutube) {
        videojs.plugin('buttonYoutube', buttonYoutube.asPlugin(this._fileViewer));
        pluginsObject.buttonYoutube = {};
      }

      return pluginsObject;
    },

    _setUpAudio: function ($player) {
      $player.addClass('vjs-audio');
      if (!this.model.get('poster')) {
        // Set default poster for audio if none is provided
        $player.find('.vjs-poster').addClass('vjs-default-coverart');
      }
    },

    _setUpYoutube: function ($player) {
      // Disable the youtube-videojs' iframe blocker
      // to re-enable clicks to elements inside the youtube player.
      // Removing it completely is no option because the youtube plugin
      // fails on trying to remove the layer on player destruction.
      $('.iframeblocker').css('display', 'none');
    },

    _setupPlayer: function (player) {
      var $player = $('#' + this.playerId);
      this._videoPlayer = player;
      this._handleResize();

      if (this._isAudio) { this._setUpAudio($player); }
      if (this._isYoutube) { this._setUpYoutube($player); }

      player.ready(this._handlePlayerReady.bind(this));
    },

    _shouldUseHdSource: function () {
      if (!this._hasHdSource) { return false; }

      var playHdDefault = this._fileViewer.getConfig().videoDefaultQualityHd;
      var playHdUser    = this._fileViewer.getStorage().getItem('videoQualityHd');
      var playHdEnabled = typeof playHdUser === 'undefined' || playHdUser;

      var playHdSettings = (playHdDefault && playHdEnabled) !== false;

      return this._hasHdSource && playHdSettings;
    },

    _getPosterForCurrentQuality: function () {
      if (this._shouldUseHdSource()) {
        return this.model.get('poster_hd') || this.model.get('poster') || '';
      }
      return this.model.get('poster') || '';
    },

    _getPosterSrc: function () {
      // No poster for autoplaying videos to prevent flickering
      if (this._isAutoPlay && this._isVideo) {
        return '';
      }
      return this._getPosterForCurrentQuality();
    },

    _getVideoSrc: function () {
      if (this._shouldUseHdSource()) {
        return this.model.get('src_hd');
      }
      return this.model.get('src');
    }

  });

  return VideoView;
});

(function () {
  'use strict';
  var FileViewer = require('file-viewer');
  FileViewer.registerPlugin('autoplay-videos', function (fileViewer) {
    var totalFilesShown;
    fileViewer.on('fv.open', function () { totalFilesShown = 0; });
    fileViewer.on('fv.changeFile', function () {
      totalFilesShown++;
      fileViewer.set('videoViewerAutoplay', totalFilesShown === 1);
    });
  });
}());

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-minimode-templates.js' */
// This file was automatically generated from minimode.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.minimodeBanner = function(opt_data, opt_ignored) {
  return '<div id="cp-info"><a tabindex="100" href="#" id="cp-files-label" aria-label="' + soy.$$escapeHtml("Show all files") + '"><span class="cp-files-collapser up">' + soy.$$escapeHtml("Show all files") + '</span><span class="cp-files-collapser down hidden">' + soy.$$escapeHtml("Hide all files") + '</span>' + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-up', accessibilityText: "Show all files", extraClasses: 'cp-files-collapser up'}) + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-down', accessibilityText: "Hide all files", extraClasses: 'cp-files-collapser down hidden'}) + '</a></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimodeBanner.soyTemplateName = 'FileViewer.Templates.minimodeBanner';
}


FileViewer.Templates.minimode = function(opt_data, opt_ignored) {
  return '<ol id="cp-thumbnails"/>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimode.soyTemplateName = 'FileViewer.Templates.minimode';
}


FileViewer.Templates.thumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + ' has-thumbnail"><img src="' + soy.$$escapeHtml(opt_data.thumbnailSrc) + '" alt="' + soy.$$escapeHtml(AJS.format("View a larger version of {0}",opt_data.title)) + '" /></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.thumbnail.soyTemplateName = 'FileViewer.Templates.thumbnail';
}


FileViewer.Templates.placeholderThumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.placeholderThumbnail.soyTemplateName = 'FileViewer.Templates.placeholderThumbnail';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'node_modules/@atlassian/fileviewer/dist/fileviewer-minimode.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('minimode/MinimodePanel',
  [
    'jquery',
    'ajs',
    'backbone',
    'minimode/ThumbnailView',
    'template-store-singleton'
  ],
  function (
    $,
    AJS,
    Backbone,
    FileThumbnailView,
    templateStore
  ) {
    'use strict';

    var FileMinimodeView = Backbone.View.extend({

      id: 'cp-footer-minimode',

      initialize: function (options) {
        this.subviews = [];
        this._fileViewer = options.fileViewer;
        this._panelView = options.panelView;
        this.listenTo(this.collection, 'add reset', this.render);
        this.listenTo(this._panelView, 'renderPanel', this._forceChromeRepaint);
        this.listenTo(this._panelView, 'renderPanel', this.scrollToSelected);
        this.$minimode = $(templateStore.get('minimode')());
        this.$minimode.appendTo(this.$el);
      },

      closeOldSubviews: function () {
        while (this.subviews.length > 0) {
          var view = this.subviews.pop();
          view.remove();
          view.unbind();
        }
      },

      render: function () {
        this.closeOldSubviews();

        this.collection.each(function (model) {
          var view = new FileThumbnailView({
            model: model,
            fileViewer: this._fileViewer,
            panelView: this._panelView
          });
          this.subviews.push(view);
          $(view.render().el).appendTo(this.$minimode);
        }, this);

        return this;
      },

      scrollToSelected: function () {
        var file = this._fileViewer.getCurrentFile();
        this.subviews.forEach(function (view) {
          if (view.model === file) {
            var topPos = view.$el.get(0).offsetTop - 59;
            if ((topPos) && this.$el.scrollTop !== topPos) {
              this.$el.find('#cp-thumbnails').scrollTop(topPos);
            }
          }
        }.bind(this));
      },

      _forceChromeRepaint: function () {
        // Chrome doesn't respect the 100% height on images once the container is resized.
        var $img = $('#cp-img');
        if ($img.length) {
          var $preview = $img.closest('#cp-image-preview'),
            left = $preview.scrollLeft(),
            top = $preview.scrollTop();
          $img.css('display', 'none').height();
          $img.css('display', 'inline-block');
          $preview.scrollLeft(left);
          $preview.scrollTop(top);
        }
      }

    });

    return FileMinimodeView;
  }
);

define('minimode/minimodePlugin', [
  'minimode/MinimodeToggle',
  'minimode/MinimodePanel'
], function (
  MinimodeToggle,
  MinimodePanel
) {
  'use strict';

  var minimodePlugin = function (fileViewer) {
    var fileView = fileViewer.getView();
    var sinkView = fileView.fileSinkView;
    var metaView = fileView.fileMetaView;

    if (!fileViewer.getConfig().enableMiniMode) {
      return;
    }

    metaView.addLayerView('minimodeToggle', MinimodeToggle, {
      predicate: MinimodeToggle.predicate
    });
    sinkView.addPanelView('minimode', MinimodePanel);
  };

  return minimodePlugin;
});
define('minimode/MinimodeToggle', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var MinimodeToggle = Backbone.View.extend({

    events: {
      'click #cp-files-label': '_toggleMinimode'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._sinkView = this._fileViewer.getView().fileSinkView;
    },

    render: function () {
      this.$el.html(templateStore.get('minimodeBanner')());
      this._setShowAllFilesVisible();
      return this;
    },

    _toggleMinimode: function (event) {
      event.preventDefault();

      var analytics = this._fileViewer.analytics;

      if (this._sinkView.isPanelInitialized('minimode')) {
        this._sinkView.teardownPanel('minimode');
        analytics.send('files.fileviewer-web.minimode.closed');
      } else {
        this._sinkView.initializePanel('minimode');
        analytics.send('files.fileviewer-web.minimode.opened');
      }

      this._setShowAllFilesVisible();
    },

    _setShowAllFilesVisible: function () {
      var visible = this._sinkView.isPanelInitialized('minimode');
      this.$('.cp-files-collapser.up').toggleClass('hidden', visible);
      this.$('.cp-files-collapser.down').toggleClass('hidden', !visible);
    }

  }, {

    predicate: function (fileViewer) {
      return fileViewer._fileState.collection.length > 1;
    }

  });

  return MinimodeToggle;
});

define('minimode/ThumbnailView',
  [
    'ajs',
    'backbone',
    'jquery',
    'underscore',
    'file-types',
    'icon-utils',
    'template-store-singleton'
  ],
  function (
    AJS,
    Backbone,
    $,
    _,
    fileTypes,
    iconUtils,
    templateStore
  ) {
    'use strict';

    var ThumbnailView = Backbone.View.extend({

      className: 'cp-thumbnail',

      tagName: 'li',

      events: {
        'click' : 'jumpToFile'
      },

      initialize: function (options) {
        this._fileViewer = options.fileViewer;
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(options.panelView, 'renderPanel', this.setSelected);
      },

      jumpToFile: function (event) {
        event.preventDefault();

        this._fileViewer.showFileWithCID(this.model.cid)
        .then(function () {
          var contentView = this._fileViewer.getView().fileContentView;
          var currentViewer;
          if (contentView.isLayerInitialized('content')) {
            currentViewer = contentView.getLayerForName('content')._viewer;
            currentViewer && currentViewer.play && currentViewer.play();
          }
        }.bind(this))
        .always(
          this._fileViewer.analytics.fn('files.fileviewer-web.minimode.thumbnail.clicked')
        );
      },

      setSelected: function () {
        // this may not be the same as file being shown, e.g., a different version of file is shown
        var file = this._fileViewer._fileState.getCurrent();
        if (file === this.model) {
          this.$el.addClass('selected');
        } else if (this.$el.hasClass('selected')) {
          this.$el.removeClass('selected');
        }
      },

      onThumbLoadError: function (ev) {
        var el = $(ev.target);
        el.parent().removeClass('has-thumbnail');
        el.remove();
      },

      render: function () {
        var type = this.model.get('type'),
          thumbnailSrc = this.model.get('thumbnail'),
          isImage = fileTypes.isImage(type);

        var generateThumbnail = this._fileViewer.getConfig().generateThumbnail;

        var $thumbnail = $(templateStore.get('placeholderThumbnail')({
          iconClass: iconUtils.getCssClass(type),
          title: this.model.get('title')
        }));

        this.$el.empty().append($thumbnail);

        if (thumbnailSrc && generateThumbnail) {
          generateThumbnail(this.model).done(function (thumbSrc) {
            $thumbnail.replaceWith(templateStore.get('thumbnail')({
              iconClass: iconUtils.getCssClass(type),
              thumbnailSrc: thumbSrc,
              title: this.model.get('title')
            }));
            this.$el.find('img').error(this.onThumbLoadError);
          }.bind(this));
        } else if (isImage || thumbnailSrc) {
          $thumbnail.replaceWith(templateStore.get('thumbnail')({
            iconClass: iconUtils.getCssClass(type),
            thumbnailSrc: thumbnailSrc || this.model.get('src'),
            title: this.model.get('title')
          }));
          this.$el.find('img').error(this.onThumbLoadError);
        }

        return this;
      }

    });

    return ThumbnailView;
  });

(function () {
  'use strict';
  var FileViewer = require('file-viewer');
  var minimodePlugin = require('minimode/minimodePlugin');
  FileViewer.registerPlugin('minimode', minimodePlugin);
}());

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = '/module-backend/asynchronous.js' */
define("jira/fileviewer/module-backend/asynchronous",["wrm/require","jira/jquery/deferred","jquery","wrm/context-path"],function(e,r,i,a){"use strict";var n=/(.+[\/])[^\/]+/;return function(o){function t(){var e=new r;return i.ajax({url:a()+"/rest/webResources/1.0/resources",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({r:[s],c:[],xc:[],xr:[]})}).done(function(r){var i=r.resources[0].url,a=i.match(n)[1]+"bcmaps/";e.resolve({workerSrc:i,cMapUrl:a})}).fail(e.reject.bind(e)),e.promise()}var c={"pdf-viewer":"wr!com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf"},s="com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf-worker";return c[o]?e(c[o]):"pdf-config"===o?t():void 0}});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = '/module-backend/analytics.js' */
define("jira/fileviewer/module-backend/analytics",["jira/analytics"],function(e){"use strict";return function(i,n){e.send({name:i,properties:n})}});;