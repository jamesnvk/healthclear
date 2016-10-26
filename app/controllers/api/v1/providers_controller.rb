module Api
  module V1 
    class ProvidersController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      
      def index 
        respond_with(Provider.all.order("id DESC"))
      end 
      
      def show 
        respond_with(Provider.find(params[:id]))
      end 
      
      def create 
        @provider = Provider.new(provider_params) 
        if @provider.save 
          respond_to do |format|
            format.json { render json: @provider }
          end 
        end 
      end 
      
      def update 
        @provider = Provider.find(params[:id])
        if @provider.update(provider_params) 
          respond_to do |format| 
            format.json { render json: @provider }
          end 
        end 
      end 
 
      def destroy 
        respond_with Provider.destroy(params[:id]) 
      end 
      
      private
      
      def provider_params 
        params.require(:provider).permit(:name, :price, :location, :rating) 
      end 
      
    end 
  end
end