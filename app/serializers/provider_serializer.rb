class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :location, :rating
end
