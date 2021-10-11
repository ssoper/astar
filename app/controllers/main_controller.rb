class MainController < ApplicationController
  layout 'default'
  
  def index
    @columns = 10
    @rows = 10
  end

end