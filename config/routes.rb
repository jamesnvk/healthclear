Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do 
      resources :[model_name_pluralized]
    end
  end
end
