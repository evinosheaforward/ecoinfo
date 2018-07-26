class HomesController < ApplicationController
  before_action :set_home, only: [:show, :edit, :update, :destroy]

  # GET /homes
  # GET /homes.json
  def index
  end

  def about
  end

  def skills
    @psp_url = 'parkersolarprobe.jhuapl.edu/'
  end

  def projects
  end

  def tab(value)
    @page_tab = value
  end

end
