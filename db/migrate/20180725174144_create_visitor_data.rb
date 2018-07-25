class CreateVisitorData < ActiveRecord::Migration[5.2]
  def change
    create_table :visitor_data do |t|
      t.integer :rating
      t.string :review

      t.timestamps
    end
  end
end
