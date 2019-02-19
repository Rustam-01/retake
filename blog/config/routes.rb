Rails.application.routes.draw do
  resources :programms
  root "programms#index"

 get "/comb" => "programms#comb"
 get "/fact" => "programms#fact"
 get "/index" => "programms#index"
end
