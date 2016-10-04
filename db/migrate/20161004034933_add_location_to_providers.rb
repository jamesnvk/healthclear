class AddLocationToProviders < ActiveRecord::Migration
  def change
    add_column :providers, :location, :string
  end
end
