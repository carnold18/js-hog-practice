class CreateHogs < ActiveRecord::Migration[5.2]
  def change
    create_table :hogs do |t|
      t.string :name
      t.string :specialty
      t.boolean :greased
      t.integer :weight
      t.string :award

      t.timestamps
    end
  end
end
