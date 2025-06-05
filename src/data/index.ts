import { Service, Therapist, BusinessHours, Testimonial } from '../types';

export const services: Service[] = [
  {
    name: 'Deep Tissue Massage',
    description: 'Targets deeper layers of muscles and connective tissue, beneficial for chronic tension and contracted areas.',
  },
  {
    name: 'Hot Stone Massage',
    description: 'Utilizes water-heated stones to apply pressure and heat, enhancing relaxation and circulation.',
  },
  {
    name: 'Swedish Massage',
    description: 'Employs five styles of long, flowing strokes to promote relaxation and improve blood flow.',
  },
  {
    name: 'Couples Massage',
    description: 'Experience relaxation together in the same room with two therapists. Perfect for couples, friends, or family members.',
  },
];

export const therapists: Therapist[] = [
  {
    name: 'Brooke Aman',
    title: 'Licensed Massage Therapist',
    bio: 'Practicing since 2001, Brooke specializes in Deep Tissue Massage and customizes sessions to address individual health and lifestyle concerns.',
    specialties: ['Deep Tissue', 'Customized Therapy', 'Therapeutic Massage'],
    imageUrl: 'https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Sherry Coxen',
    title: 'LMT',
    bio: 'With over 19 years of experience, Sherry\'s expertise includes therapeutic and Swedish massage, Polarity therapy, Craniosacral therapy, Medical massage, and Reiki.',
    specialties: ['Swedish Massage', 'Polarity Therapy', 'Craniosacral Therapy', 'Medical Massage', 'Reiki'],
    imageUrl: 'https://images.pexels.com/photos/5793919/pexels-photo-5793919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const businessHours: BusinessHours = {
  'Monday': '10:00 AM – 8:00 PM',
  'Tuesday': '10:00 AM – 8:00 PM',
  'Wednesday': '10:00 AM – 8:00 PM',
  'Thursday': '10:00 AM – 8:00 PM',
  'Friday': '10:00 AM – 8:00 PM',
  'Saturday': '10:00 AM – 6:00 PM',
  'Sunday': 'Closed',
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    title: 'Regular Client',
    text: 'I\'ve been coming to Professional Therapeutic Massage for over a year now, and Brooke has helped me tremendously with my chronic back pain. Her deep tissue technique is amazing!',
  },
  {
    name: 'Michael Thompson',
    text: 'The hot stone massage with Sherry was exactly what I needed after a stressful week. The atmosphere is so calming, and the staff is professional and friendly. Highly recommend!',
  },
  {
    name: 'Jennifer Adams',
    title: 'First-time Client',
    text: 'As someone who had never had a professional massage before, I was a bit nervous. The team made me feel comfortable right away, and my Swedish massage was incredibly relaxing. I\'ve already booked my next appointment!',
  },
  {
    name: 'Robert Wilson',
    text: 'My wife and I enjoyed a wonderful couples massage for our anniversary. The therapists were skilled and attentive, and the experience was perfect from start to finish. We\'ll definitely be back!',
  },
];