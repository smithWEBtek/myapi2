class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user_id
end
