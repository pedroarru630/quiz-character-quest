
import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CircleDollarSign } from 'lucide-react';

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

const RewardPopup = ({ isOpen, onClose, amount }: RewardPopupProps) => {
  const [showAmount, setShowAmount] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Play more realistic cash sound effect
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2QQAoUXrTp66hVFApGn+DyvmIdBSuP1PLHdSIFJ4DH8N2);
      
      // Better cash sound with multiple coin drops
      const oscillator = new (window.AudioContext || window.webkitAudioContext)();
      const osc = oscillator.createOscillator();
      const gainNode = oscillator.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(oscillator.destination);
      
      // Create cash register "cha-ching" sound
      osc.frequency.setValueAtTime(800, oscillator.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, oscillator.currentTime + 0.1);
      osc.frequency.exponentialRampToValueAtTime(600, oscillator.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.3, oscillator.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, oscillator.currentTime + 0.5);
      
      osc.start(oscillator.currentTime);
      osc.stop(oscillator.currentTime + 0.5);
      
      setTimeout(() => setShowAmount(true), 500);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-sm">
        <div className="text-center py-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <CircleDollarSign className="w-8 h-8 text-black" />
            </div>
          </div>
          
          <h2 className="text-lg font-bold mb-2 text-white">Você Recebeu:</h2>
          
          <div className={`text-3xl font-bold text-green-400 transition-all duration-500 ${
            showAmount ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            U${amount}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardPopup;
