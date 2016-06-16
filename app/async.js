exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	Promise.resolve(true);

  },

  manipulateRemoteData: function(url) {

  }
};
