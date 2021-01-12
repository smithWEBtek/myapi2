class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user
end
