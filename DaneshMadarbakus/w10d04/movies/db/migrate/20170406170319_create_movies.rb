class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.references :director, foreign_key: true

      t.timestamps
    end
  end
end
