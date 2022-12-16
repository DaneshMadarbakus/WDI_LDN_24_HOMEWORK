class Post < ApplicationRecord
  belongs_to :user
  validates :body, length: { minimum: 0, maximum: 142 }, allow_blank: false
end
