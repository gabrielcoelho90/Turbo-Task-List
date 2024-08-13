require "rails_helper"

RSpec.describe Task, type: :model do
  subject { create(:task)}

  it "should create a task" do
    expect(subject.description).to eq("Water plants")
  end

  it "is invalid without description" do
    task2 = Task.new
    task2.valid?
    expect(task2.errors.full_messages).to include("Description can't be blank")
  end

  it "checks default value for status" do
    expect(subject.status).to be false
  end

  describe "#done!" do
    it "change status do true" do
      task_done = subject.done!
      expect(task_done).to be true
    end
  end
end
