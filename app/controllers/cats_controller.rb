class CatsController < ApplicationController
  before_action :set_cat, only: [:show, :edit, :update, :destroy]

  def index
    @cats = Cat.all
    respond_to do |f|
      f.html { render :index }
      f.json { render json: @cats }
    end
  end
  
  def show
    respond_to do |f|
      f.json { render json: @cat }
    end
  end
  
  def new
    @cat = Cat.new
  end
  
  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cats_path
    else
      render :new
    end
  end
  
  def edit
  end
  
  def update
    if @cat.update(cat_params)
      redirect_to cat_path(@cat)
    else
      render :edit
    end
  end
  
  def destroy
    @cat.destroy
  end
  
  private
  def set_cat
    @cat = Cat.find(params[:id])
  end
  
  def cat_params
    params.require(:cat).permit(:name, :breed, :user_id)
  end
end
