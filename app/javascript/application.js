// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import CheckboxController from "./controllers/checkbox_controller.js"

Stimulus.register("checkbox", CheckboxController)
