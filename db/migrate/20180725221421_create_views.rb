class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.string :Home

      t.timestamps
    end
  end
end
