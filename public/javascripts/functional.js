if (!Array.prototype.reduce)
{
  Array.prototype.reduce = function(fun /*, initial*/)
  {
    var len = this.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();

    // no value to return if no initial value and an empty array
    if (len == 0 && arguments.length == 1)
      throw new TypeError();

    var i = 0;
    if (arguments.length >= 2)
    {
      var rv = arguments[1];
    }
    else
    {
      do
      {
        if (i in this)
        {
          rv = this[i++];
          break;
        }

        // if array contains no values, no initial value to return
        if (++i >= len)
          throw new TypeError();
      }
      while (true);
    }

    for (; i < len; i++)
    {
      if (i in this)
        rv = fun.call(null, rv, this[i], i, this);
    }

    return rv;
  };
};

if (!Array.prototype.min) {
  Array.prototype.min = function() {
    return this.reduce(function(prev, curr) {
      if (curr < prev)
        return curr;
      return prev;
    }, this[0]);
  };
};

if (!Array.prototype.max) {
  Array.prototype.max = function() {
    return this.reduce(function(prev, curr) {
      if (curr > prev)
        return curr;
      return prev;
    }, this[0]);
  };
};

if (!Array.prototype.remove) {  
  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
};
