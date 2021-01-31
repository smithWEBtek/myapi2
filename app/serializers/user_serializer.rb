class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :state, :country, :cats, :dogs
end
