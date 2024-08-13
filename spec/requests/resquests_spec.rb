require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  describe "request list of all tasks" do
    it do
      create(:task)
      get tasks_path
      expect(response).to be_successful
      expect(response.body).to include("Water plants")
    end
  end
end
