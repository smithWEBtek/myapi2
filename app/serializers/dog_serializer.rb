class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user
end
