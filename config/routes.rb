Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'primer/chapter001'


  get 'iframe/chapter001_1'
  get 'iframe/chapter001_2'
  get 'iframe/chapter001_3'

  root 'primer#top'
end
