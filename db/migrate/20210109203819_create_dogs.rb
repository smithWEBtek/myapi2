class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.text :name
      t.text :breed
      t.integer :user_id

      t.timestamps
    end
  end
end
