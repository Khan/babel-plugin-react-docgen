'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: {},
      onClick: onClick
    },
    children
  );
};
exports.default = Button;
Button.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'flowType': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'onClick': {
      'flowType': {
        'name': 'signature',
        'type': 'function',
        'raw': '() => any',
        'signature': {
          'arguments': [],
          'return': {
            'name': 'any'
          }
        }
      },
      'required': false,
      'description': ''
    },
    'style': {
      'flowType': {
        'name': 'any'
      },
      'required': false,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/flow2/actual.js'] = {
    name: 'Button',
    docgenInfo: Button.__docgenInfo,
    path: 'test/fixtures/flow2/actual.js'
  };
}