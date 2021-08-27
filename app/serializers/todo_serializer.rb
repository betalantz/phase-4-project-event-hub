class TodoSerializer < ActiveModel::Serializer
  attributes :id, :thing_to_do, :completed

  belongs_to :user
  belongs_to :event
end
