coffee-processing-live
======================

A simple Sinatra demo app where you can see live previews of processing sketches written in CoffeeScript.
Complies CoffeeScript at server side using coffee-processing gem.
But it would be better if it's done at client side. (TODO)

Server code
-----------

```ruby
require 'sinatra'
require 'coffee-processing'

get '/' do
  erb :index
end

post '/' do
  CoffeeProcessing.compile 'this.sketch', params[:code]
end
```

That's all.

Usage
-----

```
ruby coffee-processing.live.rb
```

