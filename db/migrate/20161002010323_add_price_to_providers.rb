class AddPriceToProviders < ActiveRecord::Migration
  def change
    add_column :providers, :price, :string
  end
end
