class Task < ApplicationRecord
  validates :description, presence: true

  def done!
    self.status = true
  end
end
