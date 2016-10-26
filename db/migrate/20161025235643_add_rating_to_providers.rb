class AddRatingToProviders < ActiveRecord::Migration
  def change
    add_column :providers, :rating, :integer, default: 0
  end
end
