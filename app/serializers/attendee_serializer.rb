class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  belongs_to :user
  belongs_to :event 

end
