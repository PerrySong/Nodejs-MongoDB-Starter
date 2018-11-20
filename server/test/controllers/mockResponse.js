const mockResponse = {
  status: function(statusCode) {
    this.statusCode = statusCode
    return this;
  },
  send: function(send) {
    this.send = send
    return this;
  },
  getStatus: function() {
    return this.statusCode
  },
  getSend: function() {
    return this.sendCode
  }
}

module.exports = {  
  mockResponse  
}