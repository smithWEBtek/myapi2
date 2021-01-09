class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user_id
end
