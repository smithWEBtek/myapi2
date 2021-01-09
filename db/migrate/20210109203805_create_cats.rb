class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.text :name
      t.text :breed
      t.integer :user_id

      t.timestamps
    end
  end
end
