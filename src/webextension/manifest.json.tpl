{
  "manifest_version": 2,
  "name": "{{title}}",
  "version": "{{version}}",

  "description": "{{description}}",

  "applications": {
    "gecko": {
      "id": "{{id}}"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "32": "icons/lb_locked.svg"
    },
    "default_title": "Lockbox",
    "browser_style": false
  },

  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+L"
      }
    }
  },

  "permissions": [
    "identity",
    "storage",
    "tabs"
  ],

  "options_ui": {
    "page": "settings/index.html",
    "browser_style": false
  }
}
