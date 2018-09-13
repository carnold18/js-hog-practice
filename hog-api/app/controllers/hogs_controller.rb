class HogsController < ApplicationController
  def index
    hogs = Hog.all

    render json: hogs
  end

  def create
    hog = Hog.create(hog_params)
    if hog
      render json: hog
    else
      render json: {status: 404}
    end
  end

  def update
    hog = Hog.find(params[:id])
    if hog
      hog.greased = !hog.greased
      hog.save
      render json: hog
    else
      render json: {status: 404}
    end

  end

  def destroy
    hog = Hog.find(params[:id])
    if hog
      hog.destroy
      render json: {status: 200}
    else render json: {status: 404}
    end
  end

  private
  def hog_params
     params.require(:hog).permit(:name, :greased, :specialty, :weight, :award)
  end
end
