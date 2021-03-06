class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

    has_many :events, dependent: :destroy 
    has_many :comments, dependent: :destroy
    has_many :todos, dependent: :destroy
    has_many :budgets, dependent: :destroy
    has_many :attendees, dependent: :destroy

    has_many :friend_as, foreign_key: :friend_a_id, class_name: 'Friendship', dependent: :destroy 
    has_many :initiated_friends, through: :friend_as, source: 'friend_b', dependent: :destroy 

    has_many :friend_bs, foreign_key: :friend_b_id, class_name: 'Friendship', dependent: :destroy 
    has_many :requested_friendship, through: :friend_bs, source: 'friend_a', dependent: :destroy 


end
