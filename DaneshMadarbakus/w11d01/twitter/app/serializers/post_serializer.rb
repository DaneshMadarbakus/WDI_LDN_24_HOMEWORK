class PostSerializer < ActiveModel::Serializer
  attributes :id, :body, :length
  has_one :user

  def length
    object.body.length
  end
end
