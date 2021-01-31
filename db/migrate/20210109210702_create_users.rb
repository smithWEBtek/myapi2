class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :username
      t.text :city
      t.text :state
      t.text :country

      t.timestamps
    end
  end
end
