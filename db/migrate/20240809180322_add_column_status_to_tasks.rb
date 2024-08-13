class AddColumnStatusToTasks < ActiveRecord::Migration[7.1]
  def change
    add_column :tasks, :status, :boolean, default: false
  end
end
