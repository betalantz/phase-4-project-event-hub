puts "Deleting old data..."
Friendship.destroy_all
User.destroy_all
Comment.destroy_all
puts "Done deleting old data!"


puts "Seeding new Data..."
john = User.create(name: 'john', username: 'john123', user_photo: 'https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/19092779_10155259485176438_5755667271500272999_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5wK12Uk36M4AX9RgOT9&_nc_oc=AQl10HUIxR2_QKXkVRU1eGtljRrn8Hi0oQsG_A1x_yjCZzpN3QRCwj9BBNorcHe5S-c&tn=uDe5Moh7nRPaUZJJ&_nc_ht=scontent-den4-1.xx&oh=0d3d2d5ff37269aaf783b4d2e633e85d&oe=614D89A3', password: 'john')
jacob = User.create(name: 'jacob', username: 'jacob1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U01UM1FRE20-8b7770a97999-512', password: 'jacob')
ivan = User.create(name: 'ivan', username: 'ivan1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U01U04LV4P2-6db3fdeb7f6f-192', password: 'ivan')
chelsea = User.create(name: "chelsea", username: "chelsea1", user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U01LVE12ZQE-6938c5ea2543-192', password: "chelsea")
steve = User.create(name: 'steve', username: 'steve1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U01UM1FK468-7ac68d1e79e3-192', password: 'steve')
joe = User.create(name: 'joe', username: 'joe1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U01UM1F61SQ-b37fe0f5f5c2-192', password: 'joe')
emily = User.create(name: 'emily', username: 'emily1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-UN67WFQN9-ad4c5bc2f06e-192', password: 'emily')
tarric = User.create(name: 'tarric', username: 'tarric1', user_photo: 'https://ca.slack-edge.com/T02MD9XTF-U015JAPGJAF-74c684d47914-192', password: 'tarric')










puts "Done seeding!!!"